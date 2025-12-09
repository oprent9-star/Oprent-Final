"use client"
import React from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    alert('Message sent! We\'ll get back to you soon.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-linear-to-r from-[#290849] to-[#55185D] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out with questions, feedback, or just to say hello.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ECB602]/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#55185D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-1">We respond within 24 hours</p>
                    <a 
                      href="mailto:oprent9@gmail.com" 
                      className="text-[#55185D] hover:text-[#290849] font-medium"
                    >
                      oprent9@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFD524]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#55185D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-1">Mon-Fri, 9AM-6PM EST</p>
                    <a 
                      href="tel:+918975942290" 
                      className="text-[#55185D] hover:text-[#290849] font-medium"
                    >
                      +91 8975942290
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#55185D]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#55185D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 mb-1">Startup-friendly office hours</p>
                    <p className="text-gray-700">
                      123 Business Street<br />
                      Startup City, SC 10001
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#290849]/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#55185D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-linear-to-r from-[#ECB602]/10 to-[#FFD524]/10 rounded-2xl p-8 border border-[#ECB602]/20">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6 text-[#55185D]" />
                <h3 className="text-xl font-bold text-gray-900">Quick Questions?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Check our FAQ for answers to common questions about shipping, returns, and orders.
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center text-[#55185D] hover:text-[#290849] font-medium"
              >
                Visit FAQ Page →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none transition bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="return">Returns & Refunds</option>
                  <option value="product">Product Questions</option>
                  <option value="business">Business Inquiry</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none transition resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="rounded text-[#55185D] focus:ring-[#55185D]"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Subscribe to our newsletter for updates and deals
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#55185D] to-[#290849] hover:from-[#290849] hover:to-[#55185D] text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>

            {/* Response Time Note */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-medium">Typical response time:</span> Within 4 business hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Our Office</h2>
            <p className="text-gray-600">Visit us at our headquarters</p>
          </div>
          <div className="h-64 md:h-96 bg-linear-to-br from-[#ECB602]/20 to-[#55185D]/20 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-[#55185D] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oprent Headquarters</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                123 Business Street, Startup City, SC 10001<br />
                We recommend scheduling a visit first
              </p>
              <button className="mt-4 text-[#55185D] hover:text-[#290849] font-medium">
                Get Directions →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media CTA */}
      <div className="bg-linear-to-r from-[#ECB602] to-[#FFD524] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#290849] mb-4">
            Connect With Us
          </h2>
          <p className="text-[#290849] mb-8 max-w-2xl mx-auto">
            Follow us on social media for updates, behind-the-scenes, and exclusive deals.
          </p>
          <div className="flex justify-center space-x-6">
            {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="bg-white text-[#290849] hover:bg-[#290849] hover:text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage