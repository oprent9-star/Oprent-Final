import React from 'react'
import Link from 'next/link'
import { Users, Target, Award, Heart, Globe, Shield, Rocket, CheckCircle } from 'lucide-react'

const AboutPage = () => {
  const team = [
    { name: 'Alex Morgan', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Sarah Chen', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop' },
    { name: 'Marcus Rivera', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { name: 'Jamie Wilson', role: 'Customer Success', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  ]

  const values = [
    { icon: Heart, title: 'Customer First', desc: 'Every decision starts with our customers in mind.' },
    { icon: Shield, title: 'Integrity', desc: 'Honest pricing, transparent policies, real reviews.' },
    { icon: Globe, title: 'Sustainability', desc: 'Eco-friendly packaging and ethical sourcing.' },
    { icon: Rocket, title: 'Innovation', desc: 'Constantly improving the shopping experience.' },
  ]

  const milestones = [
    { year: '2023', event: 'Oprent founded with a simple idea' },
    { year: '2024', event: 'First 1,000 customers served' },
    { year: '2024', event: 'Expanded to 50+ product categories' },
    { year: 'Present', event: 'Growing community of happy customers' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-[#290849] via-[#55185D] to-[#290849] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-[#FFD524]">Oprent</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              We&apos;re redefining online shopping with simplicity, quality, and exceptional value.
              A startup built for real people.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-[#ECB602]"></div>
              <span className="text-[#FFD524] font-medium">Est. 2023</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD524]/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ECB602]/5 rounded-full -translate-x-64 translate-y-64"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-[#55185D] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission is Simple
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              To make quality products accessible to everyone, without the complexity, 
              hidden fees, or overwhelming choices. We believe shopping should be 
              <span className="text-[#55185D] font-semibold"> straightforward, enjoyable, and trustworthy</span>.
            </p>
            <div className="bg-[#ECB602]/10 p-8 rounded-2xl border border-[#FFD524]/30">
              <blockquote className="text-2xl italic text-gray-800">
                &quot;If we wouldn&apos;t buy it ourselves, we won&apos;t sell it to you.&quot;
              </blockquote>
              <p className="mt-4 text-gray-600">— The Oprent Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Oprent started as a conversation between friends frustrated with 
                  complicated shopping experiences. We asked: &quot;Why can&apos;t online shopping 
                  be simple again?&quot;
                </p>
                <p>
                  What began as a small selection of carefully curated products has grown 
                  into a community of customers who trust us to deliver quality without 
                  the hassle.
                </p>
                <p>
                  We&apos;re still a startup at heart—agile, customer-focused, and constantly 
                  learning. Every day, we&apos;re working to make Oprent the most 
                  straightforward place to shop online.
                </p>
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#ECB602] mr-3" />
                  <p className="text-gray-700">
                    <span className="font-bold">100% bootstrapped</span> – We grow with our customers, not investors.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
                alt="Our workspace" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h-500&fit=crop" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop" 
                alt="Shipping products" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop" 
                alt="Customer support" 
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make at Oprent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-[#ECB602]/20 to-[#FFD524]/20 mb-6">
                  <value.icon className="h-8 w-8 text-[#55185D]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-[#55185D] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Small Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re a lean team wearing multiple hats to deliver the best experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#55185D] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">
                    Passionate about making Oprent better every day
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              We&apos;re hiring! Join our mission to simplify online shopping.
            </p>
            <Link 
              href="/careers" 
              className="inline-flex items-center bg-[#55185D] hover:bg-[#290849] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-[#ECB602] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-1 bg-linear-to-b from-[#ECB602] to-[#55185D] transform md:-translate-x-1/2"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <div className="flex items-center justify-between md:justify-start">
                      {index % 2 === 0 && (
                        <div className="w-4 h-4 bg-[#ECB602] rounded-full absolute -left-2 md:-left-1 top-6"></div>
                      )}
                      <span className="text-2xl font-bold text-[#55185D]">{milestone.year}</span>
                      {index % 2 !== 0 && (
                        <div className="w-4 h-4 bg-[#ECB602] rounded-full absolute -right-2 md:-right-1 top-6"></div>
                      )}
                    </div>
                    <p className="text-gray-700 mt-2">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-[#ECB602] to-[#FFD524]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#290849] mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-[#290849] mb-8 max-w-2xl mx-auto">
            Experience the Oprent difference. Simple shopping, real value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="bg-[#290849] hover:bg-[#55185D] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Start Shopping
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-[#290849] text-[#290849] hover:bg-[#290849]/10 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage