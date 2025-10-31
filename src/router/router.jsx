import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/AboutPage/AboutPage";
import CompareHealthInsurance from "@/pages/ComparePage/CompareHealthInsurance";
import ContactPage from "@/pages/ContactPage/ContactPage";
import FaqPage from "@/pages/FaqPage/FaqPage";
import Home from "@/pages/home/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";


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
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
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
