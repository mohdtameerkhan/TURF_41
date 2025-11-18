import React from 'react';
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <>
      <div className="text-amber-50 max-w-[1100px] h-fit m-auto p-6 grid md:grid-cols-2 gap-6">

        {/* Address Section */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <CiLocationOn className="text-4xl text-green-400" />
            <h1 className="text-2xl font-semibold">Address Information</h1>
          </div>

          <p className="text-gray-200 leading-6">
            A to Z Tower, Opposite Crystal Garden, Nabiganj Road,<br />
            Near Palhari Chauraha,<br />
            Barabanki - 225001.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Leave a Message</h1>

          <form className="flex flex-col gap-4">
            <input
              className="p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none focus:bg-white/30"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none focus:bg-white/30"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none h-28 resize-none focus:bg-white/30"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-fit transition"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
