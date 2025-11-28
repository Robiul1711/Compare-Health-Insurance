import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import CommonButton from "@/components/common/CommonButton";
import { IoCallOutline, IoClose, IoMenu } from "react-icons/io5";
import { useApiQuery } from "@/hooks/allCMS";

const Navbar = () => {
  const {
    data: homePageData,
    isLoading,
    error,
  } = useApiQuery({
    queryKey: "homepage-settings",
    url: "/homepage-settings",
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [window.location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky w-full top-0 left-0 z-50 transition-all duration-300 
          ${scrolled ? "bg-white/70 backdrop-blur-md shadow-md " : "bg-white"} 
          section-padding-x flex items-center justify-between py-4 sm:py-6`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="w-32 sm:w-42" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
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
          <CommonButton
            variant="black"
            className="flex items-center gap-2"
            onClick={() =>
              (window.location.href = `tel:${homePageData?.data?.call_number}`)
            }
          >
            <IoCallOutline />
            Call Now
          </CommonButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-2xl text-gray-700 hover:text-black transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Sidebar */}
          <div
            className={`
            fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={logo} alt="Logo" className="w-32" />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-2xl text-gray-700 hover:text-black transition-colors"
                aria-label="Close menu"
              >
                <IoClose />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block py-3 px-4 text-lg font-medium rounded-lg transition-colors duration-200
                        ${
                          isActive
                            ? "bg-gray-100 text-black border-l-4 border-black"
                            : "text-gray-700 hover:bg-gray-50 hover:text-black"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Mobile Call Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <CommonButton
                  variant="black"
                  onClick={() =>
                    (window.location.href = `tel:${homePageData?.data?.call_number}`)
                  }
                >
                  <IoCallOutline />
                  Call Now
                </CommonButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
