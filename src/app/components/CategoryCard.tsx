"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  imageUrl: string;
}

export default function CategoryCard({ name, slug, imageUrl }: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${slug}`}
      className="w-[150px] md:w-[200px] group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-[#111111]"
    >
      {/* Image */}
      <div className="relative w-full h-48 md:h-60">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Label */}
      <div className="flex justify-between items-center px-4 py-3">
        <h3 className="text-gray-200 text-base font-semibold">{name}</h3>
        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
