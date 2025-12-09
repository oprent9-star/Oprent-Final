import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Shield,
  Package,
  HelpCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#290849] text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-[#ECB602] to-[#FFD524] rounded-lg flex items-center justify-center">
                <span className="text-[#290849] font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-white">Oprent</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional equipment rental platform. Connect with quality gear.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD524] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD524] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD524] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Renters */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD524]">
              For Renters
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Browse Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Safety & Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD524]">
              For Owners
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/become-seller"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  List Your Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/owner-guide"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Owner&apos;s Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/earnings"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Earnings Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Insurance Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD524]">Support</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@oprent.com"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  support@oprent.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#55185D] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Oprent. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#FFD524] transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-[#FFD524] transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="/equipment-policy"
                className="text-gray-400 hover:text-[#FFD524] transition-colors text-sm"
              >
                Equipment Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-[#FFD524] transition-colors text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Small Note */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Professional equipment rental marketplace • Verified users •
              Insurance coverage included
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
