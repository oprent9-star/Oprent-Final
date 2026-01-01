"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingCart, User, Search, Menu, X, Clock, TrendingUp, Loader2 } from 'lucide-react'

const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  // Search states
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  const searchRef = useRef(null)
  const mobileSearchRef = useRef(null)
  const inputRef = useRef(null)
  const mobileInputRef = useRef(null)

  const navLinks = [
    { name: 'Browse Rentals', href: '/listings' },
    { name: 'Categories', href: '/categories' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About', href: '/about' },
  ]

  // Popular/trending categories for suggestions
  const popularCategories = [
    { name: 'Cameras & Photography', slug: 'cameras', icon: '📷' },
    { name: 'Construction Equipment', slug: 'construction', icon: '🏗️' },
    { name: 'Party & Events', slug: 'party-events', icon: '🎉' },
    { name: 'Audio Equipment', slug: 'audio', icon: '🎵' },
    { name: 'Outdoor & Camping', slug: 'outdoor', icon: '⛺' },
    { name: 'Tools & Hardware', slug: 'tools', icon: '🔧' },
  ]

  // Mock rental items database - Replace with your actual API call
  const mockRentalItems = [
    { id: 1, name: 'Canon EOS R5 Camera', category: 'Cameras', price: 150, image: '/images/placeholder.png' },
    { id: 2, name: 'DJI Mavic 3 Pro Drone', category: 'Drones', price: 200, image: '/images/placeholder.png' },
    { id: 3, name: 'Professional PA System', category: 'Audio', price: 300, image: '/images/placeholder.png' },
    { id: 4, name: 'Party Tent 20x40', category: 'Events', price: 250, image: '/images/placeholder.png' },
    { id: 5, name: 'Excavator Mini', category: 'Construction', price: 500, image: '/images/placeholder.png' },
    { id: 6, name: 'Camping Gear Complete Set', category: 'Outdoor', price: 80, image: '/images/placeholder.png' },
    { id: 7, name: 'Power Drill Set', category: 'Tools', price: 45, image: '/images/placeholder.png' },
    { id: 8, name: 'Sony A7 IV Camera Kit', category: 'Cameras', price: 175, image: '/images/placeholder.png' },
    { id: 9, name: 'Projector 4K Home Theater', category: 'Electronics', price: 120, image: '/images/placeholder.png' },
    { id: 10, name: 'Concrete Mixer', category: 'Construction', price: 150, image: '/images/placeholder.png' },
  ]

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('oprent_recent_searches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Save recent search
  const saveRecentSearch = (query) => {
    if (!query.trim()) return
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem('oprent_recent_searches', JSON.stringify(updated))
  }

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('oprent_recent_searches')
  }

  // Debounced search function
  const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  // Search function - Replace with your actual API call
  const performSearch = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setSearchResults([])
        setIsSearching(false)
        return
      }

      setIsSearching(true)

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300))

      // Filter mock data - Replace this with actual API call
      // Example: const response = await fetch(`/api/listings/search?q=${encodeURIComponent(query)}`)
      const filtered = mockRentalItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )

      setSearchResults(filtered.slice(0, 6)) // Limit to 6 results
      setIsSearching(false)
    }, 300),
    []
  )

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setSelectedIndex(-1)
    
    if (query.trim()) {
      setShowSuggestions(true)
      performSearch(query)
    } else {
      setSearchResults([])
      setShowSuggestions(true) // Show recent searches when empty
    }
  }

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery.trim())
      setShowSuggestions(false)
      setIsSearchOpen(false)
      // Navigate to listings page with search query
      router.push(`/listings?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  // Handle clicking on a search result
  const handleResultClick = (item) => {
    saveRecentSearch(item.name)
    setSearchQuery('')
    setShowSuggestions(false)
    setIsSearchOpen(false)
    router.push(`/listings/${item.id}`)
  }

  // Handle clicking on a recent search
  const handleRecentSearchClick = (query) => {
    setSearchQuery(query)
    saveRecentSearch(query)
    setShowSuggestions(false)
    setIsSearchOpen(false)
    router.push(`/listings?search=${encodeURIComponent(query)}`)
  }

  // Handle clicking on a category
  const handleCategoryClick = (category) => {
    setShowSuggestions(false)
    setIsSearchOpen(false)
    router.push(`/listings?category=${category.slug}`)
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions) return

    const totalItems = searchResults.length || (recentSearches.length + popularCategories.length)

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev < totalItems - 1 ? prev + 1 : prev))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && searchResults.length > 0) {
          handleResultClick(searchResults[selectedIndex])
        } else {
          handleSearchSubmit()
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        inputRef.current?.blur()
        mobileInputRef.current?.blur()
        break
    }
  }

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Search Suggestions Dropdown Component
  const SearchSuggestions = ({ isMobile = false }) => (
    <div className={`absolute top-full left-0 right-0 mt-2 bg-[#3D1259] border border-[#55185D] rounded-xl shadow-2xl overflow-hidden z-50 ${isMobile ? 'mx-0' : ''}`}>
      {isSearching ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 text-[#ECB602] animate-spin" />
          <span className="ml-2 text-gray-300">Searching...</span>
        </div>
      ) : searchQuery.trim() && searchResults.length > 0 ? (
        // Search Results
        <div className="py-2">
          <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Search Results
          </div>
          {searchResults.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleResultClick(item)}
              className={`w-full flex items-center px-4 py-3 hover:bg-[#55185D] transition-colors ${
                selectedIndex === index ? 'bg-[#55185D]' : ''
              }`}
            >
              <div className="w-12 h-12 bg-[#55185D] rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                <div className="hidden w-full h-full items-center justify-center text-2xl">📦</div>
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-medium">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.category} • ${item.price}/day</div>
              </div>
            </button>
          ))}
          <button
            onClick={handleSearchSubmit}
            className="w-full px-4 py-3 text-[#ECB602] hover:bg-[#55185D] transition-colors text-center font-medium border-t border-[#55185D]"
          >
            View all results for "{searchQuery}"
          </button>
        </div>
      ) : searchQuery.trim() && searchResults.length === 0 ? (
        // No Results
        <div className="py-8 text-center">
          <div className="text-4xl mb-2">🔍</div>
          <div className="text-white font-medium">No results found</div>
          <div className="text-gray-400 text-sm">Try different keywords or browse categories</div>
          <button
            onClick={() => router.push('/listings')}
            className="mt-4 px-4 py-2 bg-[#ECB602] text-[#290849] rounded-lg font-medium hover:bg-[#FFD524] transition-colors"
          >
            Browse All Rentals
          </button>
        </div>
      ) : (
        // Default: Recent Searches & Popular Categories
        <div className="py-2">
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="mb-2">
              <div className="px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> Recent Searches
                </span>
                <button 
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-400 hover:text-[#ECB602] transition-colors"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(search)}
                  className="w-full flex items-center px-4 py-2 hover:bg-[#55185D] transition-colors text-left"
                >
                  <Clock className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-white">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Popular Categories */}
          <div className="border-t border-[#55185D] pt-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> Popular Categories
            </div>
            <div className="grid grid-cols-2 gap-1 px-2 pb-2">
              {popularCategories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center px-3 py-2 hover:bg-[#55185D] rounded-lg transition-colors text-left"
                >
                  <span className="text-xl mr-2">{category.icon}</span>
                  <span className="text-white text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )

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
              <div className="w-10 h-10 bg-gradient-to-r from-[#ECB602] to-[#FFD524] rounded-lg flex items-center justify-center">
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
          <div className="hidden lg:flex flex-1 max-w-md mx-8 relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                placeholder="Search cameras, tools, equipment..."
                className="w-full px-4 py-2.5 pl-11 pr-4 rounded-xl bg-[#55185D] text-white placeholder-gray-300 border border-[#55185D] focus:outline-none focus:ring-2 focus:ring-[#ECB602] focus:border-transparent transition-all"
                autoComplete="off"
              />
              <Search className="absolute left-3.5 top-3 h-5 w-5 text-gray-300" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSearchResults([]); inputRef.current?.focus() }}
                  className="absolute right-3 top-2.5 text-gray-300 hover:text-white p-0.5"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </form>
            
            {/* Desktop Search Suggestions */}
            {showSuggestions && <SearchSuggestions />}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => { setIsSearchOpen(!isSearchOpen); setShowSuggestions(true) }}
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
          <div className="lg:hidden mt-3 animate-fadeIn relative" ref={mobileSearchRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                ref={mobileInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                placeholder="Search cameras, tools, equipment..."
                className="w-full px-4 py-3 pl-11 pr-10 rounded-xl bg-[#55185D] text-white placeholder-gray-300 border border-[#55185D] focus:outline-none focus:ring-2 focus:ring-[#ECB602]"
                autoFocus
                autoComplete="off"
              />
              <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-300" />
              <button 
                type="button"
                onClick={() => { setIsSearchOpen(false); setShowSuggestions(false); setSearchQuery('') }}
                className="absolute right-3 top-3.5 text-gray-300 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </form>
            
            {/* Mobile Search Suggestions */}
            {showSuggestions && <SearchSuggestions isMobile />}
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
                  href="/auth/login"
                  className="block py-3 px-4 text-white hover:text-[#ECB602] hover:bg-[#55185D] rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/add-rental"
                  className="block py-3 px-4 bg-gradient-to-r from-[#ECB602] to-[#FFD524] text-[#290849] font-bold rounded-lg text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  List Your Equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
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