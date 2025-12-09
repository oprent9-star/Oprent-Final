"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navLinks = [
    { name: 'Browse Rentals', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#290849] border-b border-[#55185D] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-[#ECB602] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-[#ECB602] to-[#FFD524] rounded-lg flex items-center justify-center">
                <span className="text-[#290849] font-bold text-xl">O</span>
              </div>
              <span className="text-white text-xl font-bold hidden sm:inline-block">Oprent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-white hover:text-[#ECB602] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-[#55185D] text-white placeholder-gray-300 border border-[#55185D] focus:outline-none focus:ring-2 focus:ring-[#ECB602]"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden text-white hover:text-[#ECB602] p-2"
              aria-label="Toggle search"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative text-white hover:text-[#ECB602] transition-colors p-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#ECB602] text-[#290849] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Account */}
            <Link href="/account" className="text-white hover:text-[#ECB602] transition-colors p-2">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden mt-3 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-[#55185D] text-white placeholder-gray-300 border border-[#55185D] focus:outline-none focus:ring-2 focus:ring-[#ECB602]"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-2.5 text-gray-300 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-[73px] left-0 right-0 bg-[#290849] border-t border-[#55185D] z-50 transform transition-transform duration-300 animate-slideIn">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-white hover:text-[#ECB602] hover:bg-[#55185D] rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Additional mobile-only links */}
              <div className="border-t border-[#55185D] pt-4 mt-4">
                <Link
                  href="/login"
                  className="block py-3 px-4 text-white hover:text-[#ECB602] hover:bg-[#55185D] rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/become-host"
                  className="block py-3 px-4 bg-linear-to-r from-[#ECB602] to-[#FFD524] text-[#290849] font-bold rounded-lg text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  List Your Equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add some CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  )
}

export default Navbar