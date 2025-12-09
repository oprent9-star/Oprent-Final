import React from 'react'
import Link from 'next/link'
import { ShoppingCart, User, Search, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#290849] border-b border-[#55185D] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-[#ECB602] to-[#FFD524] rounded-lg flex items-center justify-center">
                <span className="text-[#290849] font-bold text-xl">
                    Logo
                </span>
              </div>
              <span className="text-white text-2xl font-bold hidden md:inline-block">
                Oprent
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/products" className="text-white hover:text-[#ECB602] transition-colors font-medium">
                Shop
              </Link>
              <Link href="/categories" className="text-white hover:text-[#ECB602] transition-colors font-medium">
                Categories
              </Link>
              <Link href="/contact" className="text-white hover:text-[#ECB602] transition-colors font-medium">
                Contact Us
              </Link>
              <Link href="/about" className="text-white hover:text-[#ECB602] transition-colors font-medium">
                About
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-[#55185D] text-white placeholder-gray-300 border border-[#55185D] focus:outline-none focus:ring-2 focus:ring-[#ECB602]"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button className="lg:hidden text-white hover:text-[#ECB602]">
              <Search className="h-6 w-6" />
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative text-white hover:text-[#ECB602] transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#ECB602] text-[#290849] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Account */}
            <Link href="/account" className="text-white hover:text-[#ECB602] transition-colors">
              <User className="h-6 w-6" />
            </Link>

            {/* Mobile Menu */}
            <button className="md:hidden text-white hover:text-[#ECB602]">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 rounded-lg bg-[#55185D] text-white placeholder-gray-300 border border-[#55185D] focus:outline-none focus:ring-2 focus:ring-[#ECB602]"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar