
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "",
    maxPrice: "",
    size: "all",
    energized: false,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="py-12 max-w-7xl mx-auto px-4 flex-1 w-full">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4">Shop Products</h2>
        <p className="mb-8 text-gray-700">
          Browse by category, filter by price, size/material, temple energized, and more.
        </p>
        <ProductFilters filters={filters} setFilters={setFilters} />
        <ProductList filters={filters} />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
