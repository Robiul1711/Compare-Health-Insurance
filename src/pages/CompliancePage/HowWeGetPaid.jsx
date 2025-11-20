import React from "react";
import Title from "@/components/common/Title";
import bgBanner from "../../assets/images/bgBanner.png";

const HowWeGetPaid = () => {
  const items = [
    {
      title: "No Cost to You",
      content: `Our service is completely free for customers. You don’t pay us anything to use our website or to speak with one of our advisers.`,
    },
    {
      title: "Who Pays Us",
      content: `When you take out a policy through CompareSure, we’re paid by the health fund. 
      The payment comes from the fund to ItsMy Group (ABN 85 167 289 965), which manages our comparison service. 
      CompareSure operates under a white-label arrangement with ItsMy Group — meaning:`,
      bullets: [
        "The commercial relationships with the health funds belong to ItsMy Group.",
        "CompareSure provides the comparison and advice service as part of that arrangement.",
      ],
    },
    {
      title: "Does This Affect Your Premium?",
      content: `No. You pay the same premium as if you went directly to the health fund. 
      Commissions paid to intermediaries do not increase your premium.`,
    },
    {
      title: "How Commissions Work",
      bullets: [
        "ItsMy Group receives a commission from participating health funds when a policy is purchased.",
        "A portion of this commission is shared with CompareSure for providing comparison and advisory services.",
        "Commissions typically range from 15% to 27% of the first year’s premium, with smaller renewal commissions in later years.",
      ],
    },
    {
      title: "Range of Funds We Compare",
      content: `We compare a range of health funds — not the entire market — and not every product from each fund.`,
    },
    {
      title: "Our Recommendations",
      content: `The amount of commission received does not influence our recommendations. 
      Our advisers recommend policies based solely on your needs and budget.`,
    },
    {
      title: "Adviser Incentives",
      content: `Our advisers receive salaries and may receive performance-based bonuses for customer service quality — not for recommending specific funds.`,
    },
    {
      title: "Conflict Management",
      content: `CompareSure follows strict internal policies to manage conflicts of interest. 
      Our priority is always the best interests of our customers.`,
    },
  ];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat bg-fixed py-20 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `linear-gradient(180deg, #07192F 10%, rgba(10,20,40,0.6) 100%), url(${bgBanner})`,
      }}
    >
      {/* HEADER */}
      <div className="text-white text-center max-w-3xl mx-auto mb-16">
        <Title level="title32" className="text-white! font-bold">
          How We Get Paid
        </Title>

        <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed">
          At CompareSure, we believe in transparency. Here’s exactly how our service works
          and how we are compensated when helping you choose a health insurance policy.
        </p>
      </div>

      {/* SECTIONS */}
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#081321]/70 p-10 rounded-xl border border-white/10 shadow-lg backdrop-blur-sm"
          >
            {/* TITLE */}
            <h2 className="text-xl md:text-2xl text-white font-semibold text-center mb-8">
              {item.title}
            </h2>

            {/* CONTENT OR BULLETS */}
            <div className="text-gray-300 text-sm md:text-base space-y-4 leading-relaxed max-w-4xl mx-auto">
              {item.content && <p>{item.content}</p>}

              {/* BULLETS */}
              {item.bullets && (
                <ul className="space-y-3 mt-2">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeGetPaid;
