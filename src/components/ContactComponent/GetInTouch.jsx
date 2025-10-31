import { Phone, Mail, Clock } from 'lucide-react';

export default function GetInTouch() {
  return (
    
      <div className="bg-[#071D45] backdrop-blur-sm border border-slate-700/50 rounded-xl p-20 w-full max-w-xl">
        <h2 className="text-white text-2xl font-semibold mb-8">Get In Touch</h2>
        
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <p className="text-gray-300 text-sm">123 456 789</p>
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
              <p className="text-gray-300 text-sm">example@gmail.com</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Business Hours</h3>
              <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM</p>
              <p className="text-gray-300 text-sm">to 6:00 PM (Root time)</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}