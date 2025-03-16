// /app/Portfolio/[id]/DynamicPortfolioPageClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import PortfolioPageClient from "./PortfolioPageClient";

interface PortfolioImage {
  imgUrl: string;
  heading?: string;
  content?: string;
}

interface Portfolio {
  _id: string;
  title: string;
  headerImage: string;
  imageGallery: PortfolioImage[];
}

interface ClientProps {
  params: {
    id: string;
  };
}

export default function DynamicPortfolioPageClient({ params }: ClientProps) {
  const { id } = params;
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolios/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const data: Portfolio = await res.json();
        setPortfolio(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching portfolio:", error);
        } else {
          console.error("Unexpected error:", error);
        }
        setError("Portfolio not found.");
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolio();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error || !portfolio) return <div>{error || "Portfolio not found."}</div>;

  return <PortfolioPageClient portfolio={portfolio} />;
}

