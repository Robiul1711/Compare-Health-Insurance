import React from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../common/CommonButton";
import  { useApiMutation } from "@/hooks/postApi";

export default function MessageForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // ✔ Correct usage
const contactMutation = useApiMutation({
  url: "/contact-message/send",
  successMessage: "Message sent successfully!",
});


  const onSubmit = (data) => {
    // Call API
contactMutation.mutate(data, {
  onSuccess: () => reset(),
});
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-8">
          Send Us a Message
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* All form fields kept the same */}
          {/* ------------------------------ */}
          {/* NAME */}
          {/* ------------------------------ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 rounded-full bg-white text-slate-800 focus:ring-blue-400 ${
                  errors.name ? "ring-2 ring-red-400" : ""
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className={`w-full px-4 py-2 rounded-full bg-white text-slate-800 focus:ring-blue-400 ${
                  errors.phone ? "ring-2 ring-red-400" : ""
                }`}
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-full bg-white text-slate-800"
              {...register("email", { required: "Email is required" })}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Message
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-white text-slate-800"
              {...register("message", {
                required: "Message is required",
              })}
            />
          </div>

          {/* Submit Button */}
          <CommonButton variant="primary" type="submit">
            {contactMutation.isPending ? "Sending..." : "Send Message"}
          </CommonButton>
        </form>
      </div>
    </div>
  );
}
