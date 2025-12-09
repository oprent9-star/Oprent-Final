import React from 'react'
import Link from 'next/link'
import { Filter, Grid, List, ChevronRight, Star } from 'lucide-react'

const CategoriesPage = () => {
  // Sample categories data
  const categories = [
    { 
      id: 1, 
      name: 'Electronics', 
      description: 'Latest gadgets and devices',
      productCount: 245,
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop',
      featured: true
    },
    { 
      id: 2, 
      name: 'Fashion', 
      description: 'Clothing and accessories',
      productCount: 512,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      featured: true
    },
    { 
      id: 3, 
      name: 'Home & Living', 
      description: 'Furniture and decor',
      productCount: 189,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop'
    },
    { 
      id: 4, 
      name: 'Sports & Fitness', 
      description: 'Equipment and gear',
      productCount: 134,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    },
    { 
      id: 5, 
      name: 'Beauty & Health', 
      description: 'Skincare and wellness',
      productCount: 278,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop'
    },
    { 
      id: 6, 
      name: 'Books & Stationery', 
      description: 'Reading and writing essentials',
      productCount: 96,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop'
    },
    { 
      id: 7, 
      name: 'Toys & Games', 
      description: 'Fun for all ages',
      productCount: 167,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop'
    },
    { 
      id: 8, 
      name: 'Kitchen & Dining', 
      description: 'Cookware and utensils',
      productCount: 203,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
    },
  ]

  // Popular categories
  const popularCategories = [
    { id: 1, name: 'Smartphones', count: 45 },
    { id: 2, name: 'Laptops', count: 32 },
    { id: 3, name: 'Watches', count: 78 },
    { id: 4, name: 'Headphones', count: 56 },
    { id: 5, name: 'Cameras', count: 23 },
    { id: 6, name: 'Gaming', count: 67 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-linear-to-r from-[#290849] to-[#55185D] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Browse through our carefully curated selection of products. Find exactly what you need.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Filters Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                <Filter className="h-5 w-5 text-[#55185D]" />
              </div>

              {/* Popular Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-[#ECB602]" />
                  Popular Categories
                </h3>
                <ul className="space-y-2">
                  {popularCategories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={`/categories/${category.name.toLowerCase()}`}
                        className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-[#55185D]/5 transition-colors"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="bg-[#55185D]/10 text-[#55185D] text-sm font-medium px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/deals" className="flex items-center text-[#55185D] hover:text-[#290849] py-2">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Today&apos;s Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="/new" className="flex items-center text-[#55185D] hover:text-[#290849] py-2">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href="/bestsellers" className="flex items-center text-[#55185D] hover:text-[#290849] py-2">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Bestsellers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Help Card */}
              <div className="mt-8 p-4 bg-linear-to-r from-[#ECB602]/10 to-[#FFD524]/10 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Need help choosing?</p>
                <Link 
                  href="/contact" 
                  className="text-[#55185D] font-medium hover:text-[#290849] text-sm"
                >
                  Contact our experts →
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Stats & Controls */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">All Categories</h2>
                  <p className="text-gray-600 mt-1">
                    Discover {categories.reduce((sum, cat) => sum + cat.productCount, 0)}+ products
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <button className="flex items-center text-gray-600 hover:text-[#55185D]">
                    <Grid className="h-5 w-5 mr-2" />
                    Grid
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-[#55185D]">
                    <List className="h-5 w-5 mr-2" />
                    List
                  </button>
                </div>
              </div>

              {/* Featured Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {categories
                  .filter(cat => cat.featured)
                  .map((category) => (
                    <Link 
                      key={category.id} 
                      href={`/categories/${category.name.toLowerCase()}`}
                      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#290849]/80 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-gray-200 mb-2">{category.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="bg-[#ECB602] text-[#290849] font-bold px-3 py-1 rounded-full text-sm">
                            {category.productCount} products
                          </span>
                          <span className="text-white font-medium">Shop Now →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {/* All Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Link 
                    key={category.id} 
                    href={`/categories/${category.name.toLowerCase()}`}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#55185D]/20 transition-all group"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#55185D]">
                          {category.name}
                        </h3>
                        <span className="bg-[#55185D]/10 text-[#55185D] text-sm font-medium px-2 py-1 rounded">
                          {category.productCount}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#55185D] font-medium text-sm group-hover:text-[#290849]">
                          Browse Products
                        </span>
                        <ChevronRight className="h-4 w-4 text-[#55185D] group-hover:text-[#290849]" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-linear-to-r from-[#55185D] to-[#290849] text-white rounded-xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-2">Can&apos;t find what you&apos;re looking for?</h3>
                  <p className="text-gray-200">
                    Our team is here to help you find the perfect products.
                  </p>
                </div>
                <Link 
                  href="/contact"
                  className="bg-white text-[#290849] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage