import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Truck, RefreshCw, Star } from 'lucide-react'

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Premium Wireless Headphones', price: '$129.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', rating: 4.5 },
    { id: 2, name: 'Smart Watch Series 5', price: '$299.99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w-400&h=400&fit=crop', rating: 4.8 },
    { id: 3, name: 'Ultra HD Camera', price: '$599.99', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop', rating: 4.7 },
    { id: 4, name: 'Ergonomic Office Chair', price: '$249.99', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop', rating: 4.6 },
  ]

  const categories = [
    { name: 'Electronics', count: 45, image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop' },
    { name: 'Fashion', count: 120, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop' },
    { name: 'Home & Living', count: 89, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=200&fit=crop' },
    { name: 'Sports', count: 67, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#290849] to-[#55185D] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-[#FFD524]">Oprent</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover amazing products at unbeatable prices. Quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-[#ECB602] hover:bg-[#FFD524] text-[#290849] font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                Shop Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/products"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#55185D]/10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-[#55185D]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#ECB602]/10 p-4 rounded-full mb-4">
                <RefreshCw className="h-8 w-8 text-[#ECB602]" />
              </div>
              <h3 className="font-bold text-lg mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Easy return policy</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#FFD524]/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#FFD524]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-[#290849]/10 p-4 rounded-full mb-4">
                <Star className="h-8 w-8 text-[#290849]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">Verified products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
            <Link href="/categories" className="text-[#55185D] font-semibold hover:text-[#290849] flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
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
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  <p className="text-gray-200">{category.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link href="/shop" className="text-[#55185D] font-semibold hover:text-[#290849] flex items-center gap-2">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-[#FFD524] fill-[#FFD524]' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#290849]">{product.price}</span>
                    <button className="bg-[#55185D] hover:bg-[#290849] text-white py-2 px-4 rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-[#ECB602] to-[#FFD524]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#290849] mb-6">
            Join the <span className="text-white">Oprent</span> Family
          </h2>
          <p className="text-xl text-[#290849] mb-8 max-w-2xl mx-auto">
            Get exclusive deals, early access to sales, and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-[#290849] bg-white text-[#290849] focus:outline-none focus:ring-2 focus:ring-[#55185D]"
            />
            <button className="bg-[#290849] hover:bg-[#55185D] text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage