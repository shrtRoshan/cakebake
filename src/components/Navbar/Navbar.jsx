import React from 'react'
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
 
const Menu = [
  {
    id : 1,
    name : "Home",
    link: "/",
  },
  {
    id : 2,
    name : "Products",
    link: "/products",
  }
]
const DropdownLinks =[
  {
    id : 1,
    name : "Home",
    link: "/",
  },
  {
    id : 2,
    name : "Products",
    link: "/products",
  }
]
const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-50'>
        {/* Upper Navbar */}
      <div className='bg-primary/40 py-3 sm:py-0'>
        <div className='container flex justify-between items-center'>
            <div>
                <Link to="#"
                className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="Logo" 
                    className="w-12 uppercase" /><p className='mt-2 italic'>CakeBake</p>
                </Link>
            </div>
            {/* Search bar */}
            <div className='flex justify-between items-center gap-4'>
                <div className='relative group hidden sm:block'>
                    <input 
                        type="text" 
                        placeholder='search' 
                        className='w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] transition-all 
                        duration-300 rounded-full border 
                        border-gray-300 px-2 py-1 
                        focus:outline-none focus:border-1 
                        focus:border-primary dark:boarder-gray-500
                        dark:bg-gray-800'
                    />
                    <IoMdSearch 
                    className='text-gray-500
                     group-hover:text-primary absolute 
                     top-1/3 right-3'
                    />
                </div>
            
                {/* order button */}
                <button
                onClick={() => alert("Ordering not available yet")}
                className='bg-gradient-to-r from-primary
                to-secondary transition-all duration-200
                text-white py-1 px-4 rounded-full flex 
                items-center gap-3 group'
                >
                    <span
                    className='group-hover:block 
                    hidden transition-all duration-200'>
                    Order
                    </span>
                    <FaCartShopping 
                    className='text-xl text-white drop-shadow-sm cursor-pointer'
                    />
                </button>
                {/* Darkmode Switch */}
                <div>
                   <DarkMode />
                </div>
            </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <Link to={data.link}
                className='inline-block px-4 hover:text-primary duration-200'>{data.name}</Link>
              </li>
            ))}
            {/* dropdown menu */}
            <li className='group relative cursor-pointer'>
              <a href="#" 
              className='flex items-center gap-[2px] scroll-py-2'>
                Hover
                <span>
                  <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                </span>
                </a>
                <div>
                  <ul className='absolute z-[9900] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link to={data.link}
                        className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
