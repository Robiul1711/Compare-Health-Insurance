import React from 'react';
import { Search } from 'lucide-react';

export default function FAQHeader() {
  return (
    <div className="section-padding-x flex items-center justify-center py-6 sm:py-8 md:py-12">
    
        <div className="bg-gradient-to-br w-full from-blue-500 to-blue-600 rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search your questions..."
                  className="w-full py-3 md:py-4 pl-12 pr-6 text-gray-700 bg-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}