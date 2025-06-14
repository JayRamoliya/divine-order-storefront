import React from "react";
import { Badge } from "@/components/ui/badge";
import PRODUCTS from '../products.js'; // Adjust path as per your project structure


export interface ProductFilters {
  category: string;
  minPrice: string;
  maxPrice: string;
  size: string;
  energized: boolean;
}

interface ProductListProps {
  filters: ProductFilters;
  onProductClick?: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ filters, onProductClick }) => {
  const filtered = PRODUCTS.filter(product => {
    const {
      category, minPrice, maxPrice, size, energized
    } = filters;

    let match = true;
    if (category && category !== "all" && product.category !== category) match = false;
    if (size && size !== "all" && product.size !== size) match = false;
    if (energized && !product.energized) match = false;
    if (minPrice && product.price < parseInt(minPrice)) match = false;
    if (maxPrice && product.price > parseInt(maxPrice)) match = false;

    return match;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {filtered.length === 0 && (
        <div className="col-span-full text-center text-gray-400 text-xl py-12 md:py-16">No products found.</div>
      )}
      {filtered.map(prod => (
        <div
          key={prod.id}
          className="rounded-2xl border shadow-sm p-4 md:p-5 bg-card flex flex-col cursor-pointer transition hover:shadow-lg"
          onClick={() => onProductClick && onProductClick(prod.id)}
          tabIndex={onProductClick ? 0 : undefined}
          role={onProductClick ? "button" : undefined}
        >
          <div className="relative">
            <img 
              src={prod.image}
              alt={prod.name}
              className="rounded-lg object-cover w-full h-40 md:h-48 border mb-2"
              loading="lazy"
            />
            {prod.energized && (
              <Badge className="absolute top-2 left-2 bg-secondary text-white text-xs">
                Temple Energized
              </Badge>
            )}
            {prod.discount > 0 && (
              <Badge className="absolute top-2 right-2 bg-primary text-white text-xs">
                -{prod.discount}%
              </Badge>
            )}
          </div>
          <div className="font-bold text-base md:text-lg mt-2 mb-1 text-accent">{prod.name}</div>
          <div className="text-sm text-muted-foreground mb-2">{prod.desc}</div>
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-base md:text-lg text-secondary">
                ₹{(prod.price * (1 - prod.discount/100)).toFixed(0)}
              </span>
              {prod.discount > 0 && (
                <span className="line-through text-gray-400 text-sm">₹{prod.price}</span>
              )}
            </div>
            <div className="flex gap-2 w-full">
              <a
                href={`https://wa.me/916353716421?text=${encodeURIComponent(`Hello, I want to order:\n- Product: ${prod.name}\n- Quantity: 1\n- Name:\n- Address:\n- Pincode:\n- Preferred Delivery Date (if any):\n- Gift Wrap? [Yes/No]\n- Payment Method: COD / UPI / Paytm`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-bold py-2 rounded-lg text-center transition"
                style={{
                  background: "linear-gradient(45deg,var(--cta-gradient-start),var(--cta-gradient-end))",
                  color: "var(--cta-gradient-text)",
                  border: "none",
                  boxShadow: "0 2px 12px 0 rgba(244,163,0,0.08)"
                }}
                onClick={e => e.stopPropagation()}
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
