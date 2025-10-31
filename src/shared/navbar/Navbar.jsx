import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import CommonButton from "@/components/common/CommonButton";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contacts", path: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky w-full top-0 left-0 z-50 transition-all duration-300 
        ${scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-white"} 
        section-padding-x flex items-center justify-between py-6`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-42" />
      </Link>

      {/* Links + Button */}
      <div className="flex items-center gap-6">
        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-1 text-[15px] font-medium transition-colors duration-200 
                  ${
                    isActive
                      ? "text-black after:w-full"
                      : "text-gray-700 hover:text-black after:w-0 hover:after:w-full"
                  } 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Call Button */}
        <CommonButton variant="black" className="flex items-center gap-2">
          <IoCallOutline />
          Call Now
        </CommonButton>
      </div>
    </nav>
  );
};

export default Navbar;
