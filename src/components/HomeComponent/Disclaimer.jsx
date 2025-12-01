import { useApiQuery } from '@/hooks/allCMS';
import React from 'react'
import { Link } from 'react-router-dom'

const Disclaimer = () => {
      const {
        data: disclaimertwo,
    
      } = useApiQuery({
        queryKey: "disclaimertwo",
        url: "/dynamic-page/HomePage-Disclaimer-Two",
      });
   
  return (
   <div className='pt-20'>
      <div className="bg-blue-100 px-6 py-8 mt-auto my-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 text-sm mb-4">
            <span className="font-semibold" dangerouslySetInnerHTML={{ __html: disclaimertwo?.data?.page_content}}></span>
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/privacy-policy" className="text-gray-700 underline hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-700 underline hover:text-gray-900">
              Terms & Policy
            </Link>
            <Link to="/compliance" className="text-gray-700 underline hover:text-gray-900">
              Compliance
            </Link>
            <Link to="/code-of-conduct" className="text-gray-700 underline hover:text-gray-900">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>

   </div>
  )
}

export default Disclaimer