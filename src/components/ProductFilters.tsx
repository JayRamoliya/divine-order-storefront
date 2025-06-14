
import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const CATEGORIES = [
  { label: "All", value: "all" }, // was ""
  { label: "Rudraksha", value: "rudraksha" },
  { label: "Diya", value: "diya" },
  { label: "Mandir", value: "mandir" },
  { label: "Samagri", value: "samagri" },
];
const SIZES = [
  { label: "All", value: "all" }, // was ""
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
  { label: "Copper", value: "copper" },
  { label: "Wood", value: "wood" },
];

export interface ProductFiltersProps {
  filters: {
    category: string;
    minPrice: string;
    maxPrice: string;
    size: string;
    energized: boolean;
  };
  setFilters: (cb: (prev: ProductFiltersProps["filters"]) => ProductFiltersProps["filters"]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, setFilters }) => {
  return (
    <form className="flex flex-wrap gap-4 items-end mb-10">
      {/* Category */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">Category</label>
        <Select
          value={filters.category}
          onValueChange={(value) => setFilters(f => ({ ...f, category: value }))}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map(cat => (
              <SelectItem value={cat.value} key={cat.value}>{cat.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Price */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">Price</label>
        <div className="flex gap-2 items-center">
          <Input
            type="number"
            placeholder="Min"
            className="w-20"
            value={filters.minPrice}
            onChange={e => setFilters(f => ({ ...f, minPrice: e.target.value }))}
            min={0}
          />
          <span className="text-gray-500 mx-1">-</span>
          <Input
            type="number"
            placeholder="Max"
            className="w-20"
            value={filters.maxPrice}
            onChange={e => setFilters(f => ({ ...f, maxPrice: e.target.value }))}
            min={0}
          />
        </div>
      </div>
      {/* Size / Material */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">Size/Material</label>
        <Select
          value={filters.size}
          onValueChange={value => setFilters(f => ({ ...f, size: value }))}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {SIZES.map(size => (
              <SelectItem value={size.value} key={size.value}>{size.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Energized */}
      <div className="flex items-center mt-6">
        <Checkbox
          checked={filters.energized}
          onCheckedChange={checked => setFilters(f => ({ ...f, energized: !!checked }))}
          id="energized"
          className="mr-2"
        />
        <label htmlFor="energized" className="text-sm font-medium text-gray-700">
          Temple Energized
        </label>
      </div>
    </form>
  );
};

export default ProductFilters;
