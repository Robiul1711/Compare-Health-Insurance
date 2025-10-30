import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const variants = {
primary:
  "px-4 py-2 sm:px-5 sm:py-2 md:px-7 border-none rounded-full text-white text-sm sm:text-base font-medium bg-[linear-gradient(3deg,#478EFF_0%,#6B9FFF_100%)] shadow-[0_4px_6px_-1px_rgba(71,142,255,0.10),0_2px_4px_-2px_rgba(71,142,255,0.10)] hover:opacity-90 transition-all duration-300",
secondary:
  "bg-white  text-black border rounded-full px-4 py-2 sm:px-5 sm:py-2 md:px-7 sm:text-base  md:text-base shadow-[0_4px_6px_-1px_rgba(71,142,255,0.10),0_2px_4px_-2px_rgba(71,142,255,0.10)] hover:bg-gray-50 hover:shadow-[0_6px_10px_-2px_rgba(71,142,255,0.15)] transition-all duration-300",

black: "bg-black hover:bg-neutral-800 py-2 rounded-full text-white",

};

const CommonButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  link = null,
  ...props
}) => {
  const buttonClasses = cn(
    "py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2",
    variants[variant] || variants.primary,
    (disabled || isLoading) && "opacity-60 cursor-not-allowed",
    fullWidth && "w-full",
    className
  );

  if (link) {
    return (
      <Link to={link} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonClasses}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-inherit"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default CommonButton;