import React from 'react'
import Link from 'next/link'
import { CheckCircle, DollarSign, Shield, TrendingUp, Calendar, Users, Star, Upload, Clock, ArrowRight } from 'lucide-react'

const BecomeSellerPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Passive Income',
      desc: 'Turn your idle equipment into consistent monthly earnings'
    },
    {
      icon: Shield,
      title: 'Full Protection',
      desc: '$10,000 equipment protection and verified renters'
    },
    {
      icon: TrendingUp,
      title: 'Set Your Rates',
      desc: 'Control your pricing for daily, weekly, and monthly rentals'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      desc: 'Choose when your equipment is available for rent'
    },
    {
      icon: Users,
      title: 'Wide Audience',
      desc: 'Access to thousands of verified renters in your area'
    },
    {
      icon: Star,
      title: 'Build Reputation',
      desc: 'Earn reviews and become a trusted equipment provider'
    }
  ]

  const equipmentCategories = [
    'Photography & Videography',
    'Audio Equipment',
    'Lighting Gear',
    'Drones & Aerial',
    'Computers & Tech',
    'Power Tools',
    'Event Equipment',
    'Sports & Fitness',
    'Camping & Outdoor',
    'Specialty Tools'
  ]

  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      desc: 'Sign up as a host and verify your identity'
    },
    {
      number: '02',
      title: 'List Your Equipment',
      desc: 'Add photos, descriptions, and set your rental rates'
    },
    {
      number: '03',
      title: 'Set Availability',
      desc: 'Choose when your equipment is available for rent'
    },
    {
      number: '04',
      title: 'Start Earning',
      desc: 'Get booking requests and earn money'
    }
  ]

  const requirements = [
    'Equipment must be in good working condition',
    'Clear photos of the equipment required',
    'Valid government ID for verification',
    'Bank account for payouts',
    'Equipment must be professionally maintained',
    'Response to rental requests within 24 hours'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#290849] to-[#55185D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Your Equipment Into Income
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              List your professional gear on Oprent and start earning from rentals today.
              Join thousands of equipment owners building passive income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup-host" 
                className="bg-linear-to-r from-[#ECB602] to-[#FFD524] text-[#290849] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <Upload className="h-5 w-5 mr-2" />
                Start Listing Now
              </Link>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
                Calculate Earnings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#290849] mb-2">80%</div>
              <p className="text-gray-600">Average host earnings</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#290849] mb-2">$1,200</div>
              <p className="text-gray-600">Avg monthly earnings per host</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#290849] mb-2">24h</div>
              <p className="text-gray-600">Fast payout processing</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#290849] mb-2">10k</div>
              <p className="text-gray-600">Equipment protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why List on Oprent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to safely rent your equipment and maximize your earnings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r from-[#ECB602]/20 to-[#FFD524]/20 mb-4">
                  <benefit.icon className="h-6 w-6 text-[#55185D]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started in 4 Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-linear-to-r from-[#55185D] to-[#290849] text-white rounded-xl p-6 h-full">
                  <div className="text-4xl font-bold text-[#FFD524] mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-200">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Categories & Requirements */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Equipment Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Can List</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {equipmentCategories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      <span className="text-gray-700">{category}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Professional, well-maintained equipment in good working condition
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Host Requirements</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-lg mr-4">
                        <CheckCircle className="h-5 w-5 text-[#ECB602]" />
                      </div>
                      <span className="text-gray-700 pt-1">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#55185D] mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Approval Time</p>
                      <p className="text-sm text-gray-600">Equipment listings typically approved within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payout & Protection */}
      <div className="py-16 bg-linear-to-r from-[#ECB602]/10 to-[#FFD524]/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Payouts & Protection</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-[#55185D] mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Protection</h3>
                    <p className="text-gray-600">
                      Every rental includes $10,000 equipment protection. We handle damage claims so you don&apos;t have to worry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-[#55185D] mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Payouts</h3>
                    <p className="text-gray-600">
                      Get paid within 24 hours after equipment return. Direct deposit to your bank account.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-[#55185D] mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Renters</h3>
                    <p className="text-gray-600">
                      All renters are verified with ID and payment method. We screen every renter for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Earnings Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Value
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      defaultValue="2000"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#55185D] focus:ring-2 focus:ring-[#55185D]/20 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rental Frequency (per month)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    defaultValue="8"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#55185D]"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>1 rental</span>
                    <span>20 rentals</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Estimated Monthly Earnings</p>
                    <p className="text-3xl font-bold text-[#290849]">$480 - $720</p>
                    <p className="text-sm text-gray-500 mt-2">Based on similar equipment in your area</p>
                  </div>
                </div>
                <button className="w-full bg-linear-to-r from-[#55185D] to-[#290849] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-shadow">
                  Calculate Detailed Earnings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-linear-to-r from-[#55185D] to-[#290849] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of equipment owners who trust Oprent to safely rent their gear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup-host" 
              className="bg-linear-to-r from-[#ECB602] to-[#FFD524] text-[#290849] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              Create Host Account
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
          <p className="text-gray-300 text-sm mt-8">
            Have questions? Call our host support team at (555) 987-6543
          </p>
        </div>
      </div>
    </div>
  )
}

export default BecomeSellerPage