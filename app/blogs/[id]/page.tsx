import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the BlogPost interface
interface BlogPost {
  _id: string;
  image: string;
  heading1: string;
  content1: string;
  heading2: string;
  content2: string;
  heading3: string;
  content3: string;
  heading4: string;
  content4: string;
  heading5: string;
  content5: string;
  // Add other fields as necessary
}

interface BlogPageProps {
  blogPost: BlogPost;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogPost }) => {
  if (!blogPost) {
    notFound(); // Automatically handle 404 if blogPost is not found
  }

  return (
    <div className="container mx-auto px-6">
      {/* Hero Image */}
      <div className="relative w-full h-72 sm:h-96 lg:h-[40rem] flex justify-center">
        <Image
          src={blogPost.image}
          alt="Blog Image"
          width={1400}
          height={500}
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="mt-8">
        {/* Heading 1 & Content 1 */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            {blogPost.heading1}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            {blogPost.content1}
          </p>
        </div>

        {/* Heading 2 & Content 2 */}
        <div className="">
          <h1 className="font-bold text-xl sm:text-2xl ">
            {blogPost.heading2}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
            {blogPost.content2}
          </p>
        </div>

        {/* Heading 3 & Content 3 */}
        <div className="">
          <h1 className="font-bold text-xl sm:text-2xl ">
            {blogPost.heading3}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
            {blogPost.content3}
          </p>
        </div>

        {/* Heading 4 & Content 4 */}
        <div className="">
          <h1 className="font-bold text-xl sm:text-2xl ">
            {blogPost.heading4}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
            {blogPost.content4}
          </p>
        </div>

        {/* Heading 5 & Content 5 */}
        <div className="mb-10">
          <h1 className="font-bold text-xl sm:text-2xl ">
            {blogPost.heading5}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
            {blogPost.content5}
          </p>
        </div>
      </div>
    </div>
  );
};

// =============================
// Static Params and Server-side Fetch & Export
// =============================

// Function to fetch all blog post IDs for static generation
async function fetchAllBlogIds(): Promise<string[]> {
  try {
    const res = await fetch("https://blog.cribonix.com/api/blogs");
    if (!res.ok) {
      throw new Error("Failed to fetch blog IDs");
    }
    const blogs = await res.json();
    return blogs.map((blog: { _id: string }) => blog._id);
  } catch (error) {
    console.error("Error fetching blog IDs:", error);
    return [];
  }
}

// Implement `generateStaticParams` for static generation
export async function generateStaticParams() {
  const ids = await fetchAllBlogIds();
  if (!ids.length) {
    console.error("No blog IDs found!");
  }
  return ids.map((id) => ({ id }));
}

export default async function BlogPageComponent({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    // Fetch the blog post data from your backend API
    const res = await fetch(`https://blog.cribonix.com/api/blogs/${id}`);
    if (!res.ok) {
      notFound(); // Automatically handle 404 if the blog post is not found
    }

    const blogPost: BlogPost = await res.json();

    if (!blogPost) {
      notFound(); // Automatically handle 404 if blogPost is not found
    }

    return <BlogPage blogPost={blogPost} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound(); // Automatically handle 404 if there's an error
  }
}
