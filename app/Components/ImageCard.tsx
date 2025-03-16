import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageCardProps {
  src: StaticImageData | string;
  alt: string;
  index: number;
  totalImages: number; // Make sure this is always required
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  index,
  totalImages,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
        transition: { duration: 0.2, ease: "easeOut" },
      });
    } else {
      controls.start({
        scale: 0.9,
        opacity: 0.8,
        filter: "brightness(0.6)",
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0.8, filter: "brightness(0.6)" }}
      animate={controls}
      className="sticky top-0 w-full flex justify-center items-center"
      style={{
        zIndex: (totalImages ?? 1) + index, // Ensures a fallback for undefined
        transform: "translateY(-40vh)",
      }}
    >
      <div className="w-full h-full relative rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={5000}
          height={5000}
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="transition-transform duration-500 ease-in-out rounded-lg"
         
        />
      </div>
    </motion.div>
  );
};

export default ImageCard;
