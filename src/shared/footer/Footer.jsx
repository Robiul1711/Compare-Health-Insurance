/* eslint-disable react/prop-types */
import logo from "@/assets/Images/logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact us", href: "/contacts" },
];

const Footer = ({ data }) => {
  return (
    <footer className="section-padding-x py-10">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10">
        {/* Logo and Description */}
        <div className="md:max-w-[50%] lg:max-w-[40%]">
          <img src={logo} alt="Company Logo" className=" w-auto mb-5" />
          <p className=" leading-relaxed">
            Experience the next level of digital excellence. Our products and
            services are crafted to enhance your daily life and empower your
            business to grow seamlessly. From online solutions to customer
            support — we’re here to make it simple, secure, and smart.
          </p>

          <p className="font-semibold text-lg  mt-8 mb-3">Follow us</p>
          <div className="flex space-x-4">
            <a
              href={data?.social_links?.facebook_link}
              className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
            >
              <Facebook className="size-5 md:size-6 text-Primary" />
            </a>

            <a
              href={data?.social_links?.instagram_link}
              className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
            >
              <Instagram className="size-5 md:size-6 text-Primary" />
            </a>

            <a
              href={data?.social_links?.linkedin_link}
              className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
            >
              <Linkedin className="size-5 md:size-6 text-Primary" />
            </a>

            <a
              href={data?.social_links?.youtube_link}
              className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
            >
              <Youtube className="size-5 md:size-6 text-Primary" />
            </a>

            <a
              href={data?.social_links?.twitter_link}
              className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
            >
              <Twitter className="size-5 md:size-6 text-Primary" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="lg:w-[40%] flex justify-end">
          <div className="grid grid-cols-1 xxs:grid-cols-2 w-full md:w-auto lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h2 className="text-base md:text-lg font-semibold border-b border-gray-700 pb-2 mb-3">
                Quick Links
              </h2>
       <ul className="space-y-3 text-sm md:text-base">
  {navLinks.map((link) => (
    <li key={link.name}>
      <Link
        to={link.href}
        className="relative cursor-pointer transition-colors duration-200
                   after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:w-0 hover:after:w-full after:h-[2px] after:bg-white 
                   after:transition-all after:duration-300"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

            </div>

            {/* Customer Service */}
            <div>
              <h2 className="text-base md:text-lg font-semibold border-b border-gray-700 pb-2 mb-3">
                Legal
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="cursor-pointer transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer transition-colors">
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-base md:text-lg font-semibold border-b border-gray-700 pb-2 mb-3">
                Contact
              </h2>
              <ul className="space-y-3  text-sm md:text-base">
                <li className="flex items-center gap-2 ">
                  <Mail className="size-4" />
                  <span>
                    {data?.system_settings?.email || "info@upgrade.com"}
                  </span>
                </li>
                {data?.system_settings?.phone1 && (
                  <li className="flex items-center gap-2 ">
                    <Phone className="size-4" />
                    <span>{data?.system_settings?.phone1}</span>
                  </li>
                )}
                {data?.system_settings?.phone2 && (
                  <li className="flex items-center gap-2 ">
                    <Phone className="size-4" />
                    <span>{data?.system_settings?.phone2}</span>
                  </li>
                )}
                <li className="">
                  {data?.system_settings?.address ||
                    "123 Business Avenue, Dhaka, Bangladesh"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 mt-10 pt-5  text-sm">
        <p>© 2025 Upgrade.com — All rights reserved.</p>
        <p className=" cursor-pointer transition-colors">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
