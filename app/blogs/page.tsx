"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import head from "./images/head.png";

interface BlogPost {
  _id: string;
  image: string;
  heading1: string;
  content1: string;
}

const BlogCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}> = ({ title, description, imageUrl, link }) => {
  return (
    <a
      href={link}
      className="block bg-[#181818] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 line-clamp-3">{description}</p>
      </div>
    </a>
  );
};

const Blogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://blog.cribonix.com/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await response.json();

        const filteredData = data.map((post) => ({
          _id: post._id,
          image: post.image,
          heading1: post.heading1,
          content1: post.content1,
        }));

        setBlogPosts(filteredData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-[#040404] scroll-smooth">
      <div className="container mx-auto px-6 flex flex-col">
        {/* Header Image Section */}
        <div className="relative w-full">
          <Image
            src={head}
            alt="Office Background Image"
            layout="responsive"
            width={1500}
            height={400}
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16 z-10">
            <h2 className="text-4xl sm:text-4xl md:text-3xl lg:text-9xl font-bold text-white leading-tight">
              Blogs
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-32 flex">
          {loading ? (
            <div className="text-white text-2xl">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post._id}
                  title={post.heading1}
                  description={post.content1}
                  imageUrl={post.image}
                  link={`/blogs/${post._id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
