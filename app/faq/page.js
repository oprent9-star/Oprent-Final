"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Shield, CreditCard, Truck, Clock, Package, UserCheck, FileText, Search } from 'lucide-react'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqCategories = [
    {
      title: 'Renting Equipment',
      icon: Package,
      questions: [
        {
          question: 'How do I rent equipment on Oprent?',
          answer: 'Simply browse our catalog, select the equipment you need, choose your rental dates, and proceed to checkout. You\'ll need to create an account, verify your identity, and provide a security deposit for most items.'
        },
        {
          question: 'What are the minimum rental periods?',
          answer: 'Minimum rental periods vary by equipment type. Most items have a 1-day minimum, while specialized equipment may require 3-5 day minimums. This information is clearly displayed on each equipment listing.'
        },
        {
          question: 'Can I extend my rental period?',
          answer: 'Yes, you can extend your rental period if the equipment is available. Log into your account, go to "My Rentals," and request an extension at least 24 hours before your scheduled return time.'
        },
        {
          question: 'What happens if I damage the equipment?',
          answer: 'All rentals include basic damage protection. Minor wear and tear is expected, but significant damage will be assessed on a case-by-case basis. You\'ll be responsible for repair costs beyond normal usage. We recommend inspecting equipment upon pickup.'
        }
      ]
    },
    {
      title: 'Payments & Pricing',
      icon: CreditCard,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. We also support Apple Pay and Google Pay for faster checkout.'
        },
        {
          question: 'When is my payment processed?',
          answer: 'Payment is processed immediately upon booking confirmation. This includes the rental fee and security deposit. The security deposit is refunded within 3-5 business days after equipment return and inspection.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees. The price you see includes the rental fee and basic insurance. Additional costs may include optional premium insurance, delivery fees (if selected), and late return penalties.'
        },
        {
          question: 'Do you offer discounts for long-term rentals?',
          answer: 'Yes! We offer significant discounts for weekly and monthly rentals. The longer you rent, the better the daily rate. Check each equipment listing for specific long-term rates.'
        }
      ]
    },
    {
      title: 'Delivery & Pickup',
      icon: Truck,
      questions: [
        {
          question: 'Do you offer equipment delivery?',
          answer: 'Yes, delivery is available for most items within our service areas. Delivery fees vary based on location and equipment size. You can see delivery options and costs during checkout.'
        },
        {
          question: 'Where can I pick up equipment?',
          answer: 'We have multiple pickup locations across the city. The specific pickup location for each item is listed on the equipment page. Most equipment is available for pickup from 8 AM to 8 PM daily.'
        },
        {
          question: 'What do I need to bring for pickup?',
          answer: 'Please bring your government-issued ID (driver\'s license or passport) and the credit card used for booking. Without these, we cannot release the equipment.'
        },
        {
          question: 'Can someone else pickup the equipment for me?',
          answer: 'Yes, but they need written authorization from you (email is acceptable), their own government-issued ID, and a copy of your booking confirmation.'
        }
      ]
    },
    {
      title: 'Listing Equipment',
      icon: UserCheck,
      questions: [
        {
          question: 'How do I list my equipment on Oprent?',
          answer: 'Click "List Your Equipment" in the navigation, create a host account, provide details about your equipment, set your rental prices and availability, and submit for verification. Once approved, your equipment will be live on our platform.'
        },
        {
          question: 'What types of equipment can I list?',
          answer: 'We accept professional-grade equipment in categories like photography, videography, audio, lighting, drones, computers, and specialty tools. Equipment must be in good working condition and meet our quality standards.'
        },
        {
          question: 'How much can I earn by listing equipment?',
          answer: 'Hosts earn 80% of the rental fee. You set your own prices, and we handle payment processing, insurance, and customer support. Popular equipment can generate significant passive income.'
        },
        {
          question: 'What insurance coverage is provided?',
          answer: 'All listed equipment is covered by our $10,000 damage protection plan. We also offer optional premium insurance for high-value items. Deductibles may apply depending on the coverage selected.'
        }
      ]
    }
  ]

  const quickQuestions = [
    { question: 'Is there an age requirement to rent?', answer: 'Yes, renters must be 18+ with valid ID.' },
    { question: 'Can I cancel my booking?', answer: 'Free cancellation up to 48 hours before pickup.' },
    { question: 'Do you provide equipment training?', answer: 'Basic operation guides are provided; professional training can be arranged.' },
    { question: 'What if the equipment malfunctions?', answer: 'Contact support immediately for replacement or refund.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-linear-to-r from-[#290849] to-[#55185D] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-[#FFD524]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common questions about renting and listing equipment on Oprent
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main FAQ Content */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full px-6 py-4 pl-12 rounded-xl border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none shadow-sm"
                />
                <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-6">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-200 bg-linear-to-r from-[#ECB602]/5 to-[#FFD524]/5">
                    <div className="flex items-center">
                      <category.icon className="h-6 w-6 text-[#55185D] mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {category.questions.map((item, index) => {
                      const isOpen = openIndex === `${catIndex}-${index}`
                      return (
                        <div key={index} className="p-6">
                          <button
                            onClick={() => toggleFAQ(`${catIndex}-${index}`)}
                            className="flex justify-between items-center w-full text-left"
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-4">{item.question}</span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-[#55185D] shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="mt-4 pl-1 animate-fadeIn">
                              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Didn't Find Your Answer */}
            <div className="mt-12 bg-linear-to-r from-[#ECB602]/10 to-[#FFD524]/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                  <p className="text-gray-600">
                    Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-[#55185D] hover:bg-[#290849] text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Contact Support
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="border-2 border-[#55185D] text-[#55185D] hover:bg-[#55185D] hover:text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Questions</h3>
              <div className="space-y-4">
                {quickQuestions.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">{item.question}</p>
                    <p className="text-sm text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpful Links */}
            <div className="bg-linear-to-r from-[#55185D] to-[#290849] text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/how-it-works" className="flex items-center hover:text-[#FFD524] transition-colors">
                    <Clock className="h-4 w-4 mr-2" />
                    How Oprent Works
                  </a>
                </li>
                <li>
                  <a href="/safety" className="flex items-center hover:text-[#FFD524] transition-colors">
                    <Shield className="h-4 w-4 mr-2" />
                    Safety & Trust
                  </a>
                </li>
                <li>
                  <a href="/terms" className="flex items-center hover:text-[#FFD524] transition-colors">
                    <FileText className="h-4 w-4 mr-2" />
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="flex items-center hover:text-[#FFD524] transition-colors">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* List Your Equipment CTA */}
            <div className="bg-linear-to-r from-[#ECB602] to-[#FFD524] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#290849] mb-3">Earn Money with Your Gear</h3>
              <p className="text-[#290849] mb-4">
                List your equipment on Oprent and start earning passive income.
              </p>
              <a
                href="/become-seller"
                className="block w-full bg-[#290849] hover:bg-[#55185D] text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                List Your Equipment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default FAQPage