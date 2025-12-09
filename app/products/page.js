import React from 'react'
import Link from 'next/link'
import { Filter, Grid, List, Star, ShoppingCart, ChevronDown, Search, SortAsc } from 'lucide-react'

const ProductsPage = () => {
  const products = [
    { 
      id: 1, 
      name: 'Wireless Bluetooth Headphones', 
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.5,
      reviewCount: 128,
      category: 'Electronics',
      featured: true,
      stock: 15
    },
    { 
      id: 2, 
      name: 'Smart Fitness Watch', 
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 89,
      category: 'Electronics',
      stock: 8
    },
    { 
      id: 3, 
      name: 'Professional Camera Kit', 
      price: 899.99,
      originalPrice: 1099.99,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 56,
      category: 'Electronics',
      featured: true,
      stock: 3
    },
    { 
      id: 4, 
      name: 'Ergonomic Office Chair', 
      price: 329.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 203,
      category: 'Home & Living',
      stock: 12
    },
    { 
      id: 5, 
      name: 'Premium Coffee Maker', 
      price: 189.99,
      originalPrice: 229.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      rating: 4.4,
      reviewCount: 156,
      category: 'Kitchen',
      stock: 20
    },
    { 
      id: 6, 
      name: 'Designer Backpack', 
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.3,
      reviewCount: 78,
      category: 'Fashion',
      stock: 0
    },
    { 
      id: 7, 
      name: 'Wireless Gaming Mouse', 
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 245,
      category: 'Electronics',
      stock: 42
    },
    { 
      id: 8, 
      name: 'Yoga Mat Premium', 
      price: 39.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop',
      rating: 4.2,
      reviewCount: 91,
      category: 'Sports',
      stock: 25
    },
  ]

  const categories = [
    { name: 'All Categories', count: 128 },
    { name: 'Electronics', count: 45 },
    { name: 'Fashion', count: 32 },
    { name: 'Home & Living', count: 28 },
    { name: 'Sports', count: 15 },
    { name: 'Books', count: 8 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-[#290849] to-[#55185D] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-200">
            Discover amazing products at unbeatable prices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-[#55185D]" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-[#55185D]/5 transition-colors text-left">
                      <span className="text-gray-700">{category.name}</span>
                      <span className="bg-gray-100 text-gray-700 text-sm font-medium px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  defaultValue="500"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#55185D]"
                />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#55185D]">$0 - $500</span>
                  <button className="text-sm bg-[#55185D] text-white px-3 py-1 rounded hover:bg-[#290849]">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-800 mb-4">Availability</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#55185D] focus:ring-[#55185D]" />
                  <span className="ml-2 text-gray-700">In Stock</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#55185D] focus:ring-[#55185D]" />
                  <span className="ml-2 text-gray-700">On Sale</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#55185D] focus:ring-[#55185D]" />
                  <span className="ml-2 text-gray-700">Featured</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 mb-4 md:mb-0">
                  Showing <span className="font-bold text-[#55185D]">{products.length}</span> products
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <SortAsc className="h-5 w-5 text-gray-500 mr-2" />
                    <select className="border-none bg-transparent focus:ring-0 outline-none">
                      <option>Sort by: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Best Rating</option>
                      <option>Newest</option>
                    </select>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button className="p-2 hover:bg-gray-100 border-r border-gray-300">
                      <Grid className="h-5 w-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100">
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                      {product.featured && (
                        <span className="bg-[#ECB602] text-[#290849] text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="bg-[#55185D] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Sale
                        </span>
                      )}
                      {product.stock === 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD524] fill-[#FFD524]" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({product.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 line-clamp-1 hover:text-[#55185D]">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-[#290849]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Availability:</span>
                        <span className={product.stock > 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                        </span>
                      </div>
                      {product.stock > 0 && product.stock < 10 && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#ECB602] h-2 rounded-full" 
                            style={{ width: `${(product.stock / 10) * 100}%` }}
                          ></div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <button 
                        className={`flex-1 flex items-center justify-center py-3 rounded-lg font-medium transition-colors ${
                          product.stock === 0
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-[#55185D] hover:bg-[#290849] text-white'
                        }`}
                        disabled={product.stock === 0}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </button>
                      <Link 
                        href={`/product/${product.id}`}
                        className="flex-1 border-2 border-[#55185D] text-[#55185D] hover:bg-[#55185D] hover:text-white py-3 rounded-lg font-medium text-center transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#55185D] text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700">
                  10
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-[#ECB602] to-[#FFD524] py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#290849] mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-[#290849] mb-8 max-w-2xl mx-auto">
            Let us know what products you&apos;d like to see. We&apos;re always adding new items based on customer requests.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-[#290849] hover:bg-[#55185D] text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Request a Product
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage