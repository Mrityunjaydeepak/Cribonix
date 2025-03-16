import { useEffect, useRef, useState } from "react";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

type Testimonial = {
  id: string;
  name: string;
  designation: string;
  rating: number;
  reviewTitle: string;
  review: string;
  img: string; // New image property
};

const TestimonialsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [keenSlider, setKeenSlider] = useState<KeenSliderInstance | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/testimonials`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials.");
        }
        const data: Testimonial[] = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (sliderRef.current && testimonials.length > 0) {
      const instance = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          perView: 2,
          spacing: 15,
        },
        breakpoints: {
          "(max-width: 768px)": {
            slides: {
              perView: 1,
              spacing: 10,
            },
          },
        },
      });

      setKeenSlider(instance);

      return () => instance.destroy();
    }
  }, [testimonials]);

  const handlePrev = () => keenSlider?.prev();
  const handleNext = () => keenSlider?.next();

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-4xl font-bold text-white leading-tight">
              What They Say About Us...
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Discover the impact of our digital marketing strategies through
              the voices of those who matter most—our clients.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                aria-label="Previous slide"
                onClick={handlePrev}
                className="hidden lg:flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNext}
                className="hidden lg:flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <div ref={sliderRef} className="keen-slider">
                {loading ? (
                  <p className="text-gray-400 text-center">
                    Loading testimonials...
                  </p>
                ) : testimonials.length > 0 ? (
                  testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="keen-slider__slide">
                      <blockquote className="flex flex-col justify-between bg-[#040404] p-8 sm:p-10 lg:p-12 h-full rounded-lg">
                        <div>
                          <div className="flex gap-1 text-[#FFD700]">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <div className="mt-6">
                            <p className="text-2xl font-bold text-white">
                              {testimonial.reviewTitle}
                            </p>
                            <p className="mt-4 text-gray-400 leading-relaxed">
                              {testimonial.review}
                            </p>
                          </div>
                        </div>
                        <footer className="mt-6 flex items-center gap-4 text-base font-medium text-gray-400">
                        <Image
  src={testimonial.img}
  alt={testimonial.name}
  width={48} // Equivalent to w-12
  height={48} // Equivalent to h-12
  className="rounded-full object-cover"
/>
                          <div>
                            <p className="text-white">{testimonial.name}</p>
                            <p>{testimonial.designation}</p>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">
                    No testimonials found.
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <button
              aria-label="Previous slide"
              onClick={handlePrev}
              className="flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={handleNext}
              className="flex rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
