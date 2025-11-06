import Title from '@/components/common/Title';
import React from 'react';


const HowWeGetPaid = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-12 md:py-16 px-6 text-gray-800">
      <Title level="title32" className="text-Primary text-center mb-6 font-bold">How We Get Paid</Title>
      <p className="text-lg text-center mb-10 leading-relaxed text-gray-600">
        At CompareSure, our goal is to help you make confident, informed health insurance decisions — and to be transparent about how we operate.
      </p>

      <section className="space-y-8">
        <div>
          <Title level="title24" className="text-Secondary mb-2">No Cost to You</Title>
          <p>Our service is completely free for customers. You don’t pay us anything to use our website or to speak with one of our advisers.</p>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">Who Pays Us</Title>
          <p>
            When you take out a policy through CompareSure, we’re paid by the health fund. The payment comes from the fund to ItsMy Group (ABN 85 167 289 965), which manages our comparison service.
            CompareSure operates under a white-label arrangement with ItsMy Group — meaning:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The commercial relationships with the health funds belong to ItsMy Group.</li>
            <li>CompareSure provides the comparison and advice service as part of that arrangement.</li>
          </ul>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">Does This Affect Your Premium?</Title>
          <p>
            No. You pay the same premium as if you went directly to the health fund. Health funds pay commissions to intermediaries like ItsMy Group as part of their normal marketing and distribution costs. These payments do not increase the amount you pay.
          </p>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">How Commissions Work</Title>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>ItsMy Group receives a commission from participating health funds when a customer buys a policy through CompareSure.</li>
            <li>A portion of that commission is shared with CompareSure for providing the comparison and advisory service.</li>
            <li>The amount varies between funds but is typically between 15% and 27% of the first year’s premium, and a smaller renewal commission may apply in later years.</li>
          </ul>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">Range of Funds We Compare</Title>
          <p>
            We compare a range of health funds, not the whole market — and not every product offered by the funds we do compare.
          </p>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">Our Recommendations</Title>
          <p>
            The amount of commission received does not influence which funds or policies we recommend. Our advisers recommend options based on your individual needs, preferences, and budget — not which fund pays the most.
          </p>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">Adviser Incentives</Title>
          <p>
            Our advisers are paid a salary and may receive performance-based bonuses for helping customers find suitable cover and providing quality service, not for recommending particular funds.
          </p>
        </div>

        <div>
          <Title level="title24" className="text-Secondary mb-2">Conflict Management</Title>
          <p>
            CompareSure follows clear internal policies to manage any potential conflicts of interest. Our priority is always to act in the best interests of our customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowWeGetPaid;
