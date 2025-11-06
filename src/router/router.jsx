import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/AboutPage/AboutPage";
import CodeOfConductPage from "@/pages/CodeOfConductPage/CodeOfConductPage";
import CompareHealthInsurance from "@/pages/ComparePage/CompareHealthInsurance";
import Compliance from "@/pages/CompliancePage/Compliance";
import HowWeGetPaid from "@/pages/CompliancePage/HowWeGetPaid";
import ContactPage from "@/pages/ContactPage/ContactPage";
import Disclaimer from "@/pages/Disclaimer/Disclaimer";
import DisputePesolutionsPolicyPage from "@/pages/DisputePesolutionsPolicyPage/DisputePesolutionsPolicyPage";
import FaqPage from "@/pages/FaqPage/FaqPage";
import FiduciaryDutyPolicyPage from "@/pages/FiduciaryDutyPolicyPage/FiduciaryDutyPolicyPage";
import FundPage from "@/pages/FundPage/FundPage";
import Home from "@/pages/home/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService/TermsOfService";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/compare-health-insurance",
        element: <CompareHealthInsurance />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/faqs",
        element: <FaqPage />,
      },
      {
        path: "/contacts",
        element: <ContactPage />,
      },
      {
        path: "/fund",
        element: <FundPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/compliance",
        element: <Compliance />,
      },
      {
        path: "/how-we-get-paid",
        element: <HowWeGetPaid />,
      },
      {
        path: "/code-of-conduct",
        element: <CodeOfConductPage />,
      },
      {
        path: "/dispute-pesolutions-policy",
        element: <DisputePesolutionsPolicyPage />,
      },
      {
        path: "/fiduciary-duty-policy",
        element: <FiduciaryDutyPolicyPage />,
      },

    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
