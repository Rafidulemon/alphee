"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Golum Mostafa",
    imageUrl: "/images/testimonials/1.jpg",
    comment: "Absolutely love the fit and quality! Alphée never disappoints.",
  },
  {
    id: 2,
    name: "Md Hasan",
    imageUrl: "/images/testimonials/2.jpg",
    comment: "The fabric is incredibly soft and fits perfectly. Definitely coming back for more!",
  },
  {
    id: 3,
    name: "Md Monir",
    imageUrl: "/images/testimonials/3.jpg",
    comment: "I wore this shirt to an event and got so many compliments!",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    imageUrl: "/images/testimonials/4.jpg",
    comment: "Super comfortable and stylish – exactly what I was looking for!",
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    imageUrl: "/images/testimonials/5.jpg",
    comment: "The colors are vibrant, and the material feels durable. Highly recommended!",
  },
  {
    id: 6,
    name: "Samam Hossain",
    imageUrl: "/images/testimonials/6.jpg",
    comment: "Fast delivery and excellent customer service. Alphée nailed it again.",
  },
  {
    id: 7,
    name: "Tusrif Zihan",
    imageUrl: "/images/testimonials/7.jpg",
    comment: "Perfect fit and finish. You can tell a lot of care went into making these.",
  },
  {
    id: 8,
    name: "Saida",
    imageUrl: "/images/testimonials/8.jpg",
    comment: "I’ve tried many local brands, but Alphée stands out for its quality and detail.",
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { name, imageUrl, comment } = testimonials[currentIndex];

  return (
    <div className="py-10 px-4 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-primary text-center mb-4">
        WHAT OUR CUSTOMERS SAY
      </h2>
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="object-cover mb-4"
        />
        <p className="text-gray-100 italic">&quot;{comment}&quot;</p>
        <span className="mt-2 font-semibold text-secondary">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialSection;
