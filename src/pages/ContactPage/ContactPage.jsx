import FindPlan from "@/components/HomeComponent/FindPlan";
import bgBanner from "../../assets/images/bgBanner.png";
import Title from "@/components/common/Title";
import { FiPhone } from "react-icons/fi";
import GetInTouch from "@/components/ContactComponent/GetInTouch";
import MessageForm from "@/components/ContactComponent/MessageForm";
const ContactPage = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col gap-14 items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, #0A2043 10%, rgba(44, 46, 59, 0.00) 100%), url(${bgBanner})`,
        }}
      >
        {/* Content */}
        <div className="text-white flex flex-col items-center justify-center">
          <span className="flex items-center justify-center size-16 bg-Primary text-white rounded-2xl">
            <FiPhone className="text-3xl" />
          </span>
          <Title level="title48" className="py-4">
            Contact Us
          </Title>
          <Title level="title24">
            You can reach us in the way that suits you best:
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GetInTouch />
          <MessageForm />
        </div>
      </div>
      <div className="section-padding-y">
        <FindPlan />
      </div>
    </div>
  );
};

export default ContactPage;
