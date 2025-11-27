import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';
import { useApiQuery } from '@/hooks/allCMS';

const testimonials = [
  {
    quote: "We believe choosing health insurance shouldn't be complicated — and we're here to make it easier than ever.",
    name: "Muzamal Hussain",
    title: "Founder, Microstacks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muzamal"
  },
  {
    quote: "Healthcare should be accessible and simple for everyone. Our mission is to break down the barriers and provide clear, straightforward solutions.",
    name: "Sarah Johnson",
    title: "Co-Founder, Microstacks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "Transparency in healthcare insurance is not just our goal—it's our promise. We're committed to helping you make informed decisions.",
    name: "David Chen",
    title: "Chief Medical Officer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export default function TestimonialSlider() {
  const { data:testimonialsData, isLoading, error } = useApiQuery({
    queryKey: "testimonials",
    url: "/testimonials",
    
  });
  console.log(testimonialsData?.data)
  return (
  
      <div className="w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="rounded-3xl"
        >
          {testimonialsData?.data?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Content */}
                <div className="relative px-4 sm:px-8 py-16 md:px-16 md:py-26">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4 sm:mb-8">
                    <Quote className="w-12 h-12 text-white opacity-90" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-white sm:text-xl md:text-3xl font-medium text-center leading-relaxed mb-6 sm:mb-12 max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html:testimonial?.description}}>
                   
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover bg-white"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    
  );
}