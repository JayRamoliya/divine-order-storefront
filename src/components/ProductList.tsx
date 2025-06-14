
import React from "react";
import { Badge } from "@/components/ui/badge";

const PRODUCTS = [
  {
    id: "1",
    name: "Nepali Rudraksha Bead",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
    desc: "Original Panchmukhi Rudraksha bead, sourced from Nepal.",
    category: "rudraksha",
    size: "medium",
    energized: true,
    price: 999,
    discount: 20,
  },
  {
    id: "2",
    name: "Copper Diyas (Set of 2)",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
    desc: "Handmade pure copper diyas for daily pooja.",
    category: "diya",
    size: "small",
    energized: false,
    price: 299,
    discount: 10,
  },
  {
    id: "3",
    name: "Mini Wooden Mandir",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
    desc: "Premium small wooden mandir, perfect for home/office.",
    category: "mandir",
    size: "small",
    energized: true,
    price: 2499,
    discount: 18,
  },
  {
    id: "4",
    name: "Daily Pooja Samagri Kit",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
    desc: "Complete kit for all everyday poojas, includes 15+ items.",
    category: "samagri",
    size: "",
    energized: false,
    price: 599,
    discount: 8,
  },
];

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
    <div className="grid md:grid-cols-3 gap-8">
      {filtered.length === 0 && (
        <div className="col-span-full text-center text-gray-400 text-xl py-16">No products found.</div>
      )}
      {filtered.map(prod => (
        <div
          key={prod.id}
          className={`rounded-2xl border shadow-sm p-5 bg-white flex flex-col cursor-pointer transition hover:shadow-lg`}
          onClick={() => onProductClick && onProductClick(prod.id)}
          tabIndex={onProductClick ? 0 : undefined}
          role={onProductClick ? "button" : undefined}
        >
          <div className="relative">
            <img 
              src={prod.image}
              alt={prod.name}
              className="rounded-lg object-cover w-full h-48 border mb-2"
              loading="lazy"
            />
            {prod.energized && (
              <Badge className="absolute top-2 left-2 bg-green-600 text-white text-xs">
                Temple Energized
              </Badge>
            )}
            {prod.discount > 0 && (
              <Badge className="absolute top-2 right-2 bg-yellow-500 text-white text-xs">
                -{prod.discount}%
              </Badge>
            )}
          </div>
          <div className="font-bold text-lg mt-2 mb-1 text-accent">{prod.name}</div>
          <div className="text-sm text-gray-700 mb-2">{prod.desc}</div>
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-lg text-secondary">
                ₹{(prod.price * (1 - prod.discount/100)).toFixed(0)}
              </span>
              {prod.discount > 0 && (
                <span className="line-through text-gray-400 text-sm">₹{prod.price}</span>
              )}
            </div>
            {/* WhatsApp Order button retained; Add to Cart removed */}
            <div className="flex gap-2 w-full">
              <a
                href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hello, I want to order:\n- Product: ${prod.name}\n- Quantity: 1\n- Name:\n- Address:\n- Pincode:\n- Preferred Delivery Date (if any):\n- Gift Wrap? [Yes/No]\n- Payment Method: COD / UPI / Paytm`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-bold py-2 rounded-lg text-center transition text-gray-900"
                style={{ 
                  background: "linear-gradient(45deg,#FFD700,#FFC300)", 
                  color: "#861919", 
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
