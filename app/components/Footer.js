import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#290849] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-[#ECB602] to-[#FFD524] rounded-lg flex items-center justify-center">
                <span className="text-[#290849] font-bold text-xl">Logo</span>
              </div>
              <span className="text-2xl font-bold text-white">Oprent</span>
            </div>
            <p className="text-gray-300 text-sm">
              Making quality products accessible to everyone. Simple, honest, and customer-focused.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FFD524] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD524] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD524] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:oprent9@gmail.com" className="text-gray-300 hover:text-[#FFD524] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD524]">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  Best Deals
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD524]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD524]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#ECB602] mt-1 shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business Street<br />
                  Startup City, SC 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#ECB602] shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#ECB602] shrink-0" />
                <a href="mailto:oprent9@gmail.com" className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm">
                  oprent9@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#55185D] my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Oprent. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-[#FFD524] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#FFD524] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-[#FFD524] transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Startup Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            A proud startup business. Made with ❤️ for our customers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer