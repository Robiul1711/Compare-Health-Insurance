import React from 'react';
import { useForm } from 'react-hook-form';
import CommonButton from '../common/CommonButton';

export default function MessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-xl bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name and Phone Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className={`w-full px-4 py-2 rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.name ? 'ring-2 ring-red-400' : ''
                }`}
                {...register('name', { 
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="000 000 0000 000"
                className={`w-full px-4 py-2 rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.phone ? 'ring-2 ring-red-400' : ''
                }`}
                {...register('phone', {
                  required: 'Phone is required',
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={`w-full px-4 py-2 rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.email ? 'ring-2 ring-red-400' : ''
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message here...."
              rows="3"
              className={`w-full px-4 py-2 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.message ? 'ring-2 ring-red-400' : ''
              }`}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters'
                }
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <CommonButton variant='primary'
            type="submit"
          >
            Send Message
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </CommonButton>
        </form>
      </div>
    </div>
  );
}