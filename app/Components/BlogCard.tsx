import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="blog-card  rounded-lg overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={title} width={1000} height={1000} className=" w-full h-52 object-cover" />
      <div className="p-4">
        <h2 className="blog-title text-xl font-semibold mb-2">{title}</h2>
        <p className="blog-description text-white/40 mb-4">{description}</p>
        <Link href={link} className="read-more text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
