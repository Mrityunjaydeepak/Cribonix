// /app/Portfolio/[id]/page.tsx
import React from "react";
import DynamicPortfolioPageClient from "./DynamicPortfolioPageClient";

interface Portfolio {
  _id: string;
  title: string;
  headerImage: string;
  imageGallery: {
    imgUrl: string;
    heading?: string;
    content?: string;
  }[];
}

// Fetch the list of all portfolio IDs for static generation
async function fetchAllPortfolioIds(): Promise<string[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolios`, {
      cache: "no-store", // Fetch fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch portfolio IDs");
    }
    const portfolios: Portfolio[] = await res.json();
    return portfolios.map((portfolio) => portfolio._id);
  } catch (error) {
    console.error("Error fetching portfolio IDs:", error);
    return [];
  }
}

// Implement `generateStaticParams` for static generation
export async function generateStaticParams() {
  const ids = await fetchAllPortfolioIds();
  if (!ids.length) {
    console.error("No portfolio IDs found!");
  }
  return ids.map((id) => ({ id }));
}

interface PageProps {
  params: {
    id: string;
  };
}

// Server Component simply renders the client component
export default function Page({ params }: PageProps) {
  return <DynamicPortfolioPageClient params={params} />;
}
