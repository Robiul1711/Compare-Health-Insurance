import { useApiQuery } from '@/hooks/allCMS';
import { Phone, Mail, Clock } from 'lucide-react';

export default function GetInTouch() {
    const { data: homePageData, isLoading } = useApiQuery({
    queryKey: "homepage-settings",
    url: "/homepage-settings",
  });
 console.log(homePageData?.data);
  return (
    
      <div className="bg-[#071D45] backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 sm:p-8 md:p-20 w-full">
        <h2 className="text-white text-2xl font-semibold mb-8">Get In Touch</h2>
        
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <p className="text-gray-300 text-sm">{homePageData?.data?.phone}</p>
              <p className="text-[#C7DBFF] font-semibold text-sm">Request a Free Call</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-gray-300 text-sm">{homePageData?.data?.email}</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Business Hours</h3>
              <p className="text-gray-300 text-sm">{homePageData?.data?.business_hour}</p>
           
            </div>
          </div>
        </div>
      </div>
   
  );
}