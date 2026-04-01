"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProductSearchProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onClear: () => void;
}

const ProductSearch = ({ onSearch, searchQuery, onClear }: ProductSearchProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  // Keep input in sync with parent-provided searchQuery (e.g., when clearing from header)
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="flex gap-2 w-full max-w-full sm:max-w-md items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          inputMode="search"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          aria-label="Search products"
          className="pl-10 pr-10 py-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <Button
        type="submit"
        className="bg-primary-gradient text-white px-4 py-2 rounded-xl shadow-lg h-9"
      >
        Search
      </Button>
    </form>
  );
};

export default ProductSearch;
