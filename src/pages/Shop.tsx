
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Read 'category' query param from URL on mount:
  const searchParams = new URLSearchParams(location.search);
  const urlCategory = searchParams.get("category") || "all";

  const [filters, setFilters] = useState({
    category: urlCategory,
    minPrice: "",
    maxPrice: "",
    size: "all",
    energized: false,
  });

  // If the user changes the filter, update the URL for 'category'
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (filters.category && filters.category !== "all") {
      params.set("category", filters.category);
    } else {
      params.delete("category");
    }
    // Only replace if the query changed
    if (params.toString() !== location.search.replace("?", "")) {
      navigate({ search: params.toString() }, { replace: true });
    }
    // eslint-disable-next-line
  }, [filters.category]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="py-12 max-w-7xl mx-auto px-4 flex-1 w-full">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4">Shop Products</h2>
        <p className="mb-8 text-gray-700">
          Browse by category, filter by price, size/material, temple energized, and more.
        </p>
        <ProductFilters filters={filters} setFilters={setFilters} />
        <ProductList
          filters={filters}
          onProductClick={id => navigate(`/product/${id}`)}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
