import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonButton from "../common/CommonButton";
import Title from "../common/Title";
import readytofiend from "../../assets/images/readytofiend.png";

gsap.registerPlugin(ScrollTrigger);

export default function FindPlan() {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const smallTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for smooth sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(iconRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
        .from(titleRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(textRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(buttonRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(smallTextRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center section-padding-x text-center bg-cover bg-no-repeat py-10"
      style={{
        backgroundImage: `url(${readytofiend})`,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Icon */}
        <div className="relative mb-8" ref={iconRef}>
          <div className="bg-Primary rounded-2xl p-3 sm:p-5 shadow-lg">
            <FaCheckCircle className="sm:w-10 sm:h-10 size-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <div ref={titleRef}>
          <Title level="title48" className="text-center">
            Ready to Find Your Perfect
            <br />
            Plan?
          </Title>
        </div>

        {/* Subheading */}
        <p
          ref={textRef}
          className="text-Secondary font-semibold mt-4 text-center"
        >
          Join thousands of satisfied customers who found better coverage at
          better prices
        </p>

        {/* CTA Button */}
        <div ref={buttonRef} className="py-6">
          <CommonButton link="/compare-health-insurance" variant="primary">
            Get Your Free Comparison
          </CommonButton>
        </div>

        {/* Small text */}
        <p ref={smallTextRef} className="text-Secondary font-semibold">
          No commitment required • Takes less than 2 minutes
        </p>
      </div>
    </div>
  );
}
