import React from 'react'
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  MessageSquare, 
  Bell, 
  Search, 
  Menu,
  ChevronDown
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
   
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-600">
                <Menu size={24} />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-600 relative">
                <Bell size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">John Doe</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Widgets */}
            <StatWidget title="Total Users" value="1,234" icon={<Users size={24} />} />
            <StatWidget title="Total Sales" value="$12,345" icon={<ShoppingCart size={24} />} />
            <StatWidget title="New Messages" value="42" icon={<MessageSquare size={24} />} />
            <StatWidget title="Revenue" value="$54,321" icon={<BarChart3 size={24} />} />
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <ActivityRow user="Alice Johnson" action="Created a new post" date="2 hours ago" />
                  <ActivityRow user="Bob Smith" action="Updated profile" date="4 hours ago" />
                  <ActivityRow user="Charlie Brown" action="Purchased a product" date="1 day ago" />
                  <ActivityRow user="Diana Prince" action="Left a comment" date="2 days ago" />
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatWidget({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      <div className="bg-blue-100 rounded-full p-3">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-2xl font-bold text-blue-600">{value}</p>
      </div>
    </div>
  )
}

function ActivityRow({ user, action, date }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-gray-900">{user}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-gray-500">{action}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {date}
      </td>
    </tr>
  )
}