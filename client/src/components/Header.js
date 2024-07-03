import React from 'react';
import { MdMenu, MdVerified } from "react-icons/md";
import { FaGift, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex items-center py-2 px-4 bg-white shadow-sm'>
      <MdMenu size={30} className='text-gray-700'/>
      <div className='flex-grow ml-3'>
        <p className='text-xl font-bold text-gray-800'>The Public House</p>
        <div className='flex items-center text-gray-600'>
          <MdVerified size={18} className='mr-1'/>
          <p className='text-sm'>Official Website</p>
        </div>
      </div>
      <FaGift size={30} className='text-gray-700 mr-4'/>
      {/* <FaSearch size={30} className='text-gray-700'/> */}
    </div>
  );
}

export default Header;
