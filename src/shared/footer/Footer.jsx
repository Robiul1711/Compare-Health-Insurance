/* eslint-disable react/prop-types */
import logo from "@/assets/Images/logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocationEdit,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact us", href: "/contacts" },
  // { name: "Contact us", href: "/contacts" },
];

const Footer = ({ data }) => {
  return (
    <footer className="section-padding-x py-5 sm:py-6 lg:py-8 xl:py-10">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10">
        {/* Logo and Description */}
        <div className="md:max-w-[40%] ">
          <img src={logo} alt="Company Logo" className=" w-auto mb-5" />
          <p className=" leading-relaxed">
Making health insurance simple, transparent, and stress-free.
          </p>

          <p className="font-semibold text-lg  mt-8 mb-3">Follow us</p>
      <div className="flex space-x-4">
  <a
    href={data?.social_links?.facebook_link || "https://facebook.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
  >
    <Facebook className="size-5 md:size-6 text-Primary" />
  </a>

  <a
    href={data?.social_links?.instagram_link || "https://instagram.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
  >
    <Instagram className="size-5 md:size-6 text-Primary" />
  </a>

  <a
    href={data?.social_links?.linkedin_link || "https://linkedin.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
  >
    <Linkedin className="size-5 md:size-6 text-Primary" />
  </a>

  <a
    href={data?.social_links?.youtube_link || "https://youtube.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
  >
    <Youtube className="size-5 md:size-6 text-Primary" />
  </a>

  <a
    href={data?.social_links?.twitter_link || "https://twitter.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-Primary/10 rounded-[10px] hover:bg-Primary/20 transition-colors"
  >
    <Twitter className="size-5 md:size-6 text-Primary" />
  </a>
</div>

        </div>

        {/* Links Grid */}
        <div className="lg:max-w-[60%] flex justify-end">
          <div className="grid grid-cols-1 xxs:grid-cols-2 w-full md:w-auto lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h2 className="text-base md:text-lg font-semibold border-b border-gray-200 pb-2 mb-3">
                Quick Links
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                {navLinks.map((link) => (
                  <li key={link.name} className="hover:text-Primary">
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
              <h2 className="text-base md:text-lg font-semibold border-b border-gray-200 pb-2 mb-3">
                Legal
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="hover:text-Primary ">
                  <Link
                    to="/privacy-policy"
                    className="cursor-pointer transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="hover:text-Primary ">
                  <Link
                    to="/terms-of-service"
                    className="cursor-pointer transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="hover:text-Primary ">
                  <Link
                    to="/disclaimer"
                    className="cursor-pointer transition-colors"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li className="hover:text-Primary ">
                  <Link
                    to="/compliance"
                    className="cursor-pointer transition-colors"
                  >
                    Compliance
                  </Link>
                </li>
                <li className="hover:text-Primary ">
                  <Link
                    to="/code-of-conduct"
                    className="cursor-pointer transition-colors"
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li className="hover:text-Primary ">
                  <Link
                    to="/dispute-pesolutions-policy"
                    className="cursor-pointer transition-colors"
                  >
                    Dispute resolutions policy
                  </Link>
                </li>
                <li className="hover:text-Primary ">
                  <Link
                    to="/fiduciary-duty-policy"
                    className="cursor-pointer transition-colors"
                  >
                    Fiduciary duty policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-base md:text-lg font-semibold border-b border-gray-200 pb-2 mb-3">
                Contact
              </h2>
              <ul className="space-y-3  text-sm md:text-base ">
                <li className="flex items-center gap-2 ">
                  <Phone className="size-4" />
                  <span>{"(123) 456-7890"}</span>
                </li>
                <li className="flex items-center gap-1 ">
                  <Mail className="size-6" />
                  <span>
                    {data?.system_settings?.email || "info@comparesure.com.au"}
                  </span>
                </li>


                {/* <li className="flex items-center gap-2">
                  <CiLocationOn className="size-7" />
                  {data?.system_settings?.address ||
                    "123 Insurance Street, London, UK"}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 mt-5 sm:mt-10 pt-5  text-sm">
        <p className="text-Primary font-medium">© 2025 CompareSure. All rights reserved.</p>
        <p className=" cursor-pointer transition-colors">Trustpilot Reviews</p>
      </div>
    </footer>
  );
};

export default Footer;
