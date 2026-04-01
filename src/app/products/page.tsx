"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import ProductsSection from "@/components/products-section";
import CategoryModal from "@/components/category-modal";
import ProductSearch from "@/components/product-search";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Filter, Search } from "lucide-react";

export default function ProductsPage() {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryModal(false);
  };

  const handleClearFilter = () => {
    setSelectedCategory(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Clear category filter when searching
    if (query) {
      setSelectedCategory(null);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Page Header */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Title and Description */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {searchQuery 
                      ? `Search Results for "${searchQuery}"`
                      : selectedCategory 
                        ? selectedCategory 
                        : "All Products"
                    }
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {searchQuery 
                      ? "Find the products you're looking for"
                      : selectedCategory 
                        ? `Browse our ${selectedCategory.toLowerCase()} collection`
                        : "Explore our comprehensive range of farm-fresh fruits and vegetables"
                    }
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  {(selectedCategory || searchQuery) && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        handleClearFilter();
                        handleClearSearch();
                      }}
                      className="flex items-center space-x-2"
                    >
                      <span>Show All</span>
                    </Button>
                  )}
                  <Button
                    onClick={() => setShowCategoryModal(true)}
                    className="bg-primary-gradient text-white px-6 py-3 rounded-2xl shadow-lg flex items-center space-x-2"
                  >
                    <Filter className="h-5 w-5" />
                    <span>Filter by Category</span>
                  </Button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex justify-center">
                <ProductSearch
                  onSearch={handleSearch}
                  searchQuery={searchQuery}
                  onClear={handleClearSearch}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <ProductsSection selectedCategory={selectedCategory} searchQuery={searchQuery} />
      </main>
      <Footer />
      <MobileNav />
      
      {/* Category Modal */}
      <CategoryModal
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onCategorySelect={handleCategorySelect}
      />
    </div>
  );
}
