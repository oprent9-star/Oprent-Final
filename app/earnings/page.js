"use client"
import React, { useState } from 'react'
import { DollarSign, TrendingUp, BarChart3, Calendar, Package, Download, Filter, MoreVertical, Eye, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react'

const EarningsPage = () => {
  const [timeRange, setTimeRange] = useState('monthly')
  const [activeTab, setActiveTab] = useState('overview')

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Canon EOS R5 Camera Kit',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
      category: 'Photography',
      totalEarnings: 2450.50,
      totalRentals: 42,
      avgDailyRate: 58.35,
      utilizationRate: 78,
      thisMonthEarnings: 420.75,
      lastMonthEarnings: 380.25,
      change: '+10.6%'
    },
    {
      id: 2,
      name: 'DJI Mavic 3 Pro Drone',
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop',
      category: 'Drones',
      totalEarnings: 1890.20,
      totalRentals: 28,
      avgDailyRate: 67.50,
      utilizationRate: 65,
      thisMonthEarnings: 315.40,
      lastMonthEarnings: 290.80,
      change: '+8.4%'
    },
    {
      id: 3,
      name: 'Sony FX3 Cinema Camera',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
      category: 'Cinematography',
      totalEarnings: 3200.80,
      totalRentals: 35,
      avgDailyRate: 91.45,
      utilizationRate: 82,
      thisMonthEarnings: 540.20,
      lastMonthEarnings: 480.60,
      change: '+12.4%'
    },
    {
      id: 4,
      name: 'Professional Lighting Kit',
      image: 'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?w=400&h=400&fit=crop',
      category: 'Lighting',
      totalEarnings: 1280.40,
      totalRentals: 56,
      avgDailyRate: 22.86,
      utilizationRate: 92,
      thisMonthEarnings: 210.80,
      lastMonthEarnings: 195.40,
      change: '+7.9%'
    }
  ]

  // Transaction history
  const transactions = [
    { id: 1, date: '2024-01-15', product: 'Canon EOS R5', renter: 'John D.', duration: '3 days', amount: 175.05, status: 'Completed' },
    { id: 2, date: '2024-01-14', product: 'DJI Mavic 3', renter: 'Sarah M.', duration: '2 days', amount: 135.00, status: 'Completed' },
    { id: 3, date: '2024-01-13', product: 'Sony FX3', renter: 'Mike R.', duration: '5 days', amount: 457.25, status: 'Completed' },
    { id: 4, date: '2024-01-12', product: 'Lighting Kit', renter: 'Emma L.', duration: '1 day', amount: 22.86, status: 'Completed' },
    { id: 5, date: '2024-01-11', product: 'Canon EOS R5', renter: 'David K.', duration: '4 days', amount: 233.40, status: 'Pending' }
  ]

  // Stats cards
  const stats = [
    { title: 'Total Earnings', value: '$8,821.90', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Active Rentals', value: '7', change: '+2', icon: ShoppingCart, color: 'text-blue-600' },
    { title: 'Utilization Rate', value: '79.3%', change: '+5.2%', icon: TrendingUp, color: 'text-purple-600' },
    { title: 'Avg Daily Rate', value: '$60.04', change: '+3.8%', icon: BarChart3, color: 'text-[#ECB602]' }
  ]

  // Time range options
  const timeRanges = [
    { value: 'daily', label: 'Today' },
    { value: 'weekly', label: 'This Week' },
    { value: 'monthly', label: 'This Month' },
    { value: 'quarterly', label: 'This Quarter' },
    { value: 'yearly', label: 'This Year' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Earnings Dashboard</h1>
              <p className="text-gray-600">Track your equipment rental performance and earnings</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </button>
              <button className="flex items-center bg-[#55185D] text-white rounded-lg px-4 py-2 hover:bg-[#290849]">
                <DollarSign className="h-4 w-4 mr-2" />
                Request Payout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'products', 'transactions', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors ${activeTab === tab ? 'border-[#55185D] text-[#55185D]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time Range Filter */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">Time Range:</span>
            </div>
            <div className="flex space-x-2">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-3 py-1 text-sm rounded-full ${timeRange === range.value ? 'bg-[#55185D] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.change.startsWith('+') ? (
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">vs last period</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-')} bg-opacity-10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products Performance Table */}
        {activeTab === 'products' || activeTab === 'overview' ? (
          <div className="bg-white rounded-lg border shadow-sm mb-8">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Product Performance</h2>
                <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Earnings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Rentals</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Daily Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilization</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">This Month</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">${product.totalEarnings.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{product.totalRentals}</div>
                        <div className="text-xs text-gray-500">rentals</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">${product.avgDailyRate.toFixed(2)}</div>
                        <div className="text-xs text-gray-500">per day</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${product.utilizationRate}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{product.utilizationRate}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">${product.thisMonthEarnings.toFixed(2)}</div>
                        <div className="flex items-center text-xs">
                          {product.change.startsWith('+') ? (
                            <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                          ) : (
                            <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                          )}
                          <span className={product.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                            {product.change}
                          </span>
                          <span className="text-gray-500 ml-1">vs last month</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing {products.length} of {products.length} products
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded text-sm">Previous</button>
                <button className="px-3 py-1 bg-[#55185D] text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border rounded text-sm">2</button>
                <button className="px-3 py-1 border rounded text-sm">Next</button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Transactions Table */}
        {activeTab === 'transactions' && (
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
                <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Renter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{transaction.product}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{transaction.renter}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">${transaction.amount}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-[#55185D] hover:text-[#290849] mr-4">
                          <Eye className="h-4 w-4 inline mr-1" />
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          Download Invoice
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Overview */}
        {activeTab === 'analytics' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Earnings Chart Placeholder */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Earnings Over Time</h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Earnings chart would display here</p>
                  <p className="text-sm text-gray-400 mt-2">Line chart showing monthly trends</p>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Top Performing Products</h3>
              <div className="space-y-4">
                {products.slice(0, 3).map((product, index) => (
                  <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-lg font-bold text-gray-300 mr-4">{index + 1}</div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">${product.thisMonthEarnings.toFixed(2)}</div>
                      <div className="text-xs text-green-600">{product.change} vs last month</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats Bar */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-linear-to-r from-[#ECB602]/10 to-[#FFD524]/10 rounded-lg p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-[#55185D] mr-4" />
              <div>
                <p className="text-sm text-gray-600">Next Payout</p>
                <p className="text-xl font-bold text-gray-900">$1,245.80</p>
                <p className="text-sm text-gray-500">Available for withdrawal</p>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-r from-[#55185D]/10 to-[#290849]/10 rounded-lg p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-[#55185D] mr-4" />
              <div>
                <p className="text-sm text-gray-600">Upcoming Rentals</p>
                <p className="text-xl font-bold text-gray-900">4</p>
                <p className="text-sm text-gray-500">Next 7 days</p>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-r from-[#ECB602]/5 to-[#FFD524]/5 rounded-lg p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-[#55185D] mr-4" />
              <div>
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-xl font-bold text-gray-900">+15.2%</p>
                <p className="text-sm text-gray-500">This month vs last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg border shadow-sm p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Need help with your earnings?</h3>
              <p className="text-gray-600">Check our seller guide or contact support</p>
            </div>
            <div className="flex space-x-4">
              <button className="border border-[#55185D] text-[#55185D] hover:bg-[#55185D] hover:text-white px-4 py-2 rounded-lg transition-colors">
                View Seller Guide
              </button>
              <button className="bg-[#55185D] text-white hover:bg-[#290849] px-4 py-2 rounded-lg transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsPage