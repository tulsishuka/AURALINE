import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Pin as Pinterest } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "SUPPORT",
      links: [
        "Track Your Order", "Contact Us", "Book an Appointment", 
        "Frequently Asked Questions", "Shipping & Return Policy", 
        "Store Finder", "Site Index", "Gift Card", "Jewellery Gift Guide"
      ]
    },
    {
      title: "ABOUT",
      links: [
        "About Auren", "Jobs & Careers", "Ethics & Compliance", 
        "Sustability", "Alumni Community"
      ]
    },
    {
      title: "LEGAL",
      links: [
        "Privacy Policy", "Terms and Conditions", "Terms of Use", 
        "Cookie Policy", "Product Safety", "Transparency in Coverage"
      ]
    },
    {
      title: "SERVICES",
      links: [
        "Request Repair", "Personalisation", "Gift Services", 
        "Business Accounts", "Auren Select Financing"
      ]
    }
  ];

  return (
    <footer className="bg-[#3E4B3A] text-[#E5E7EB] pt-20 pb-10 px-6 md:px-12 lg:px-24 font-light">
      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        {footerSections.map((section, idx) => (
          <div key={idx} className="flex flex-col space-y-4">
            <h3 className="text-[3xl] font-serif tracking-[0.2em] font-medium text-white mb-2">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a href="#" className="text-[17px] font-garamond hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-white/20 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright and Location */}
          <div className="flex items-center gap-6  font-garamond text-[#FFFFFF] font-semibold text-xl tracking-wider">
            <span>AUREN @2026</span>
            <a href="#" className="underline font-garamond   underline-offset-4 decoration-white/40 text-[#FFFFFF]">
              Change Location: INDIA
            </a>
          </div>

          {/* Central Logo */}
          <div className="order-first md:order-none">
            <h1 className="text-4xl tracking-[0.3em] font-upright font-semibold text-white">
              AUREN
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6  text-white font-bold">
            <a href="#" className="hover:text-white transition-opacity hover:opacity-80 ">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-opacity hover:opacity-80">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-opacity hover:opacity-80">
              <Pinterest size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-opacity hover:opacity-80">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-opacity hover:opacity-80">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;