import React, { useEffect, useState } from "react";
import Title from "../common/Title";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaRegUser } from "react-icons/fa6";
import FreeComparison from "./FreeComparison";
import TrustedProviders from "./TrustedProviders";
import ExpertAdvice from "./ExpertAdvice";
import {
  ComparisonIcon,
  ExpartProviderIcon,
  TrustedProvidersIcon,
} from "../Icon";

const MindMatters = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  const tabs = [
    {
      id: 1,
      name: "Free Comparison",
      icon: <ComparisonIcon />,
      type: "content",
      content: <FreeComparison />,
    },

    {
      id: 2,
      name: "Trusted Providers",
      icon: <TrustedProvidersIcon />,
      type: "content",
      content: <TrustedProviders />,
    },
    {
      id: 3,
      name: "Expert Advice",
      icon: <ExpartProviderIcon />,
      type: "content",
      content: <ExpertAdvice />,
    },
  ];
  return (
    <div>
      <Title level="title48" className="max-w-[900px] mx-auto text-center">
        We’re Different — Because Your Peace of Mind Matters
      </Title>

      <div className="w-full mt-24">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 rounded-xl overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="flex sm:w-62 sm:flex-col overflow-x-auto sm:overflow-visible ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center px-4 py-3 sm:py-4 transition-all flex-shrink-0 sm:flex-shrink-none
            ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800"
            }
          `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabBackground"
                    className="absolute inset-0 bg-Primary rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <div className="flex items-center gap-2 sm:gap-3 z-10">
                  <span className="text-base sm:text-xl">{tab.icon}</span>
                  <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                    {tab.name}
                  </span>
                </div>

                {activeTab === tab.id ? (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute right-3 w-2 h-2 rounded-full bg-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                ) : (
                  <div className="absolute right-3 w-2 h-2 rounded-full bg-gray-400/0 group-hover:bg-gray-400/30 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 relative  overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 md:p-6  overflow-y-auto"
              >
                {/* <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <span>{tabs.find((t) => t.id === activeTab)?.icon}</span>
            <span>{tabs.find((t) => t.id === activeTab)?.name}</span>
          </h3> */}
                <div className="prose">
                  {tabs.find((tab) => tab.id === activeTab)?.content ||
                    tabs[0].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMatters;
