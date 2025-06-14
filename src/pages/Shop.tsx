
import React, { useState } from "react";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "all",         // was ""
    minPrice: "",
    maxPrice: "",
    size: "all",             // was ""
    energized: false,
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">Shop Products</h2>
      <p className="mb-8 text-gray-700">
        Browse by category, filter by price, size/material, temple energized, and more.
      </p>
      <ProductFilters filters={filters} setFilters={setFilters} />
      <ProductList filters={filters} />
    </div>
  );
};

export default Shop;
