"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

// ===========================
// Interface
// ===========================
interface Portfolio {
  _id: string;
  title: string;
  headerImage: string;
  imageGallery: {
    imgUrl: string;
    heading?: string;
    content?: string;
  }[];
  videoGallery?: {
    videoUrl: string;
    heading?: string;
    content?: string;
  }[];
}

interface PortfolioPageClientProps {
  portfolio: Portfolio;
}

// ===========================
// Image Carousel Modal
// ===========================
function ImageCarouselModal({
  images,
  initialIndex,
  onClose,
}: {
  images: { imgUrl: string; heading?: string; content?: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [onClose, prevImage, nextImage]
  );

  // Attach keyboard listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    // Outer layer -- clicking here closes the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose}
    >
      {/* Inner container -- stop click propagation here so we don't close if user clicks on the image */}
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Current Image */}
        <div className="relative w-full h-[70vh] bg-black flex items-center justify-center">
          <Image
            src={images[currentIndex].imgUrl}
            alt={images[currentIndex].heading || "Carousel Image"}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-md"
            priority
          />
        </div>

        {/* Heading/Content */}
        {(images[currentIndex].heading || images[currentIndex].content) && (
          <div className="text-white p-4 text-center">
            {images[currentIndex].heading && (
              <h2 className="text-2xl font-semibold">
                {images[currentIndex].heading}
              </h2>
            )}
            {images[currentIndex].content && (
              <p className="mt-2">{images[currentIndex].content}</p>
            )}
          </div>
        )}

        {/* Prev / Next Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

// ===========================
// Video Carousel Modal
// ===========================
function VideoCarouselModal({
  videos,
  initialIndex,
  onClose,
}: {
  videos: { videoUrl: string; heading?: string; content?: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const prevVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevVideo();
      if (e.key === "ArrowRight") nextVideo();
    },
    [onClose, prevVideo, nextVideo]
  );

  // Attach keyboard listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    // Outer layer -- clicking here closes the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose}
    >
      {/* Inner container -- stop click propagation */}
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Current Video */}
        <div className="relative w-full flex items-center justify-center">
          <video
            src={videos[currentIndex].videoUrl}
            className="rounded-md max-h-[70vh]"
            controls
            autoPlay
          />
        </div>

        {/* Heading/Content */}
        {(videos[currentIndex].heading || videos[currentIndex].content) && (
          <div className="text-white p-4 text-center">
            {videos[currentIndex].heading && (
              <h2 className="text-2xl font-semibold">
                {videos[currentIndex].heading}
              </h2>
            )}
            {videos[currentIndex].content && (
              <p className="mt-2">{videos[currentIndex].content}</p>
            )}
          </div>
        )}

        {/* Prev / Next Buttons */}
        <button
          onClick={prevVideo}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          &#10094;
        </button>
        <button
          onClick={nextVideo}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

// ===========================
// Main Client Component
// ===========================
const PortfolioPageClient: React.FC<PortfolioPageClientProps> = ({
  portfolio,
}) => {
  // IMAGE GALLERY STATES
  const [showImageCarousel, setShowImageCarousel] = useState(false);
  const [imageInitialIndex, setImageInitialIndex] = useState(0);

  // VIDEO GALLERY STATES
  const [showVideoCarousel, setShowVideoCarousel] = useState(false);
  const [videoInitialIndex, setVideoInitialIndex] = useState(0);

  // Handlers to open modals
  const openImageCarousel = (index: number) => {
    setImageInitialIndex(index);
    setShowImageCarousel(true);
  };

  const openVideoCarousel = (index: number) => {
    setVideoInitialIndex(index);
    setShowVideoCarousel(true);
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Portfolio Title */}
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          {portfolio.title}
        </h1>

        {/* Header Image */}
        {/* <div className="relative w-full h-96 mb-8">
          <Image
            src={portfolio.headerImage}
            alt="Portfolio Header"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            priority
            unoptimized
          />
        </div> */}

        {/* IMAGE GALLERY SECTION */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {portfolio.imageGallery.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openImageCarousel(index)}
            >
              <div className="relative w-full h-60">
                <Image
                  src={image.imgUrl}
                  alt={image.heading || "Gallery Image"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  unoptimized
                />
              </div>
              {(image.heading || image.content) && (
                <div className="absolute inset-0 bg-black bg-opacity-0 text-white flex flex-col justify-end p-4 rounded-md opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {image.heading && (
                    <h2 className="text-lg font-semibold">{image.heading}</h2>
                  )}
                  {image.content && <p className="text-sm">{image.content}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* VIDEO GALLERY SECTION */}
        {portfolio.videoGallery && portfolio.videoGallery.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              Video Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.videoGallery.map((video, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openVideoCarousel(index)}
                >
                  {/* 
                    Here, ideally you'd show a thumbnail image or a poster for the video. 
                    For simplicity, we're using a dark box with "Click to Play Video". 
                  */}
                  <div className="relative w-full h-60 bg-black flex items-center justify-center rounded-md">
                    <p className="text-white">Click to Play Video</p>
                  </div>
                  {(video.heading || video.content) && (
                    <div className="mt-2 text-white">
                      {video.heading && (
                        <h2 className="text-lg font-semibold">
                          {video.heading}
                        </h2>
                      )}
                      {video.content && (
                        <p className="text-sm">{video.content}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* IMAGE MODAL */}
      {showImageCarousel && (
        <ImageCarouselModal
          images={portfolio.imageGallery}
          initialIndex={imageInitialIndex}
          onClose={() => setShowImageCarousel(false)}
        />
      )}

      {/* VIDEO MODAL */}
      {showVideoCarousel && portfolio.videoGallery && (
        <VideoCarouselModal
          videos={portfolio.videoGallery}
          initialIndex={videoInitialIndex}
          onClose={() => setShowVideoCarousel(false)}
        />
      )}
    </div>
  );
};

export default PortfolioPageClient;
