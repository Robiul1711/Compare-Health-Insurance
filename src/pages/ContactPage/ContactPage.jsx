import FindPlan from "@/components/HomeComponent/FindPlan";
import bgBanner from "../../assets/images/bgBanner.png";
import Title from "@/components/common/Title";
import { FiPhone } from "react-icons/fi";
import GetInTouch from "@/components/ContactComponent/GetInTouch";
import MessageForm from "@/components/ContactComponent/MessageForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      {/* ===== Hero Section ===== */}
      <section
        className="min-h-[80vh] sm:min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center section-padding-x lg:px-16 py-10 sm:py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,32,67,0.9) 0%, rgba(44,46,59,0.6) 100%), url(${bgBanner})`,
        }}
      >
        {/* Hero Content */}
        <div className="text-white max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center  mb-4">
            <span className="flex items-center justify-center w-16 h-16 bg-Primary text-white rounded-2xl shadow-lg">
              <FiPhone className="text-3xl" />
            </span>
          </div>

          <Title
            level="title48"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-center"
          >
            Contact Us
          </Title>

          <Title
            level="title24"
            className="text-base sm:text-lg md:text-xl font-medium opacity-90"
          >
            You can reach us in the way that suits you best.
          </Title>
        </div>

        {/* Contact Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 sm:mt-10 md:mt-16">
         
            <GetInTouch />
       

      
            <MessageForm />
       
        </div>
      </section>

      {/* ===== Find Plan Section ===== */}
      <section className="pt-10  bg-gray-50">
        <FindPlan />
      </section>
    </div>
  );
};

export default ContactPage;
