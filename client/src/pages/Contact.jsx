import React from "react";

const Contact = () => {
  return (
    <div className="px-6  lg:px-24 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        <h1 className="text-3xl font-medium my-4 text-primary ">
          Contact Us
        </h1>
      </p>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-gray-800/50 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-gray-700">
          {/* LEFT: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Contact with MovieTime
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Content
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter the content you want to send"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 transition-colors font-semibold py-3 rounded-lg"
              >
                Send contact
              </button>
            </form>
          </div>

          {/* RIGHT: Company Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              MovieTime Studio
            </h3>
            <p className="text-gray-300 mb-6">
             Thank you for your interest in MovieTime! If you have any questions or comments, please contact us using the information below.
            </p>

            <div className="space-y-4">
              <p>
                <span className="font-semibold text-primary">📍 Address:</span>
                123 Rạp Phim Street, TP. Hồ Chí Minh
              </p>
              <p>
                <span className="font-semibold text-primary">
                  📞 Phone:
                </span>
                0909 123 456
              </p>
              <p>
                <span className="font-semibold text-primary">✉️ Email:</span>
                thanglong479@gmail.com
              </p>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              © 2025 MovieTime. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
