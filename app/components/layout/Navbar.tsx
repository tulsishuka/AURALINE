import React from 'react';
import { Search, Heart, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#3d4a3a] text-white px-8 py-4 flex items-center justify-between ">
      {/* Brand Logo */}
      <div className="text-3xl tracking-widest font-upright font-bold">
      AURALINE
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6 text-[11px]  tracking-[0.2em] uppercase font-Helvetica text-gray-300">
        <a href="#" className="hover:opacity-70 transition-opacity">About Us</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Jewellery</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Watches</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Bags and Accessories</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Fragnances</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Gifts</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-5">
        <button aria-label="Search">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button aria-label="Wishlist">
          <Heart size={20} strokeWidth={1.5} />
        </button>
        <button aria-label="Account">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button aria-label="Cart">
          <ShoppingBag size={20} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;