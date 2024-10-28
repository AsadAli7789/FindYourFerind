
import Link from "next/link";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
      <aside className="w-[15vw] bg-gray-800 text-white p-4 h-[100vh]">
        <div className="text-2xl font-bold mb-8">Admin Panel</div>
        <nav>
          <ul className="space-y-2">
          <Link href={"/admin/dashboard"}>
          <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </a>
            </li>
          
          </Link>
      <Link href={"/admin/categories"}>

          <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                <MessageSquare size={20} />
                <span>categories</span>
              </a>
            </li>
</Link>
<Link href={"/admin/users"}>

<li>
    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
      <Users size={20} />
      <span>Users</span>
    </a>
  </li>
</Link>
<Link href={"/admin/subcategories"}>

<li>
    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
      <Users size={20} />
      <span>subcategories</span>
    </a>
  </li>
</Link>
<Link href={"/admin/evnt"}>

<li>
    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
      <MessageSquare size={20} />
      <span>Event</span>
    </a>
  </li>
</Link>
            
            
          </ul>
        </nav>
      </aside>

    {/* <div className=" w-[100vw] bg-gray-100 flex items-center justify-center gap-4 py-2 ">

    
    <Link href={"/admin/dashboard"}>
    
    <button className=" p-1 rounded-md bg-white">Dashboard</button>
    </Link>
    
    <Link href={"/admin/categories"}>
    
    <button className=" rounded-md p-1 bg-white">Categories</button>
    </Link>
    

    <Link href={"/admin/subcategories"}>
    
    <button className=" rounded-md p-1 bg-white">Subcategories</button>
    </Link>

    <Link href={"/admin/users"}>
    
    <button className=" rounded-md p-1 bg-white ">Users</button>
    </Link>
    
    
  
    <Link href={"/admin/evnt"}>
    
    <button className=" rounded-md bg-white active:shadow-lg p-1">Evnt</button>
    </Link>
    

    </div> */}
    <div className="w-[85vw] bg-gray-800 text-white p-4">

        {children}
    </div>
      </body>
    </html>
  );
}
