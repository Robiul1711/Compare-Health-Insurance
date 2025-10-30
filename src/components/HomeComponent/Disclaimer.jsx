import React from 'react'

const Disclaimer = () => {
  return (
   <div className='pt-20'>
      <div className="bg-blue-100 px-6 py-8 mt-auto my-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 text-sm mb-4">
            <span className="font-semibold">Disclaimer:</span> Health Insurance Advice is provided by Just Switch and administered by the itsMy Group (ABN 85 167 289 965). Just Switch and itsMy Group are both signatories to the Private Health Insurance Intermediaries Code of Conduct.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-700 underline hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 underline hover:text-gray-900">
              Terms & Policy
            </a>
            <a href="#" className="text-gray-700 underline hover:text-gray-900">
              Compliance
            </a>
            <a href="#" className="text-gray-700 underline hover:text-gray-900">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>

   </div>
  )
}

export default Disclaimer