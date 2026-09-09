"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string | null;
}

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/produto/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-gold text-white font-sans text-[9px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-charcoal/20 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="bg-gold text-white font-sans text-[10px] tracking-widest uppercase px-6 py-2.5">
            Ver Detalhes
          </span>
        </div>
      </div>

      <div className="pt-4">
        <p className="font-sans text-[10px] tracking-widest uppercase text-gold/80 mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg font-light text-charcoal leading-snug mb-1">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-charcoal/50 line-clamp-1">
          {product.description}
        </p>
        <p className="font-serif text-base text-charcoal mt-2">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
