import React, { useState, useRef } from "react";

export default function ContactForm() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          action="https://getform.io/f/7076a250-d454-4555-a2d3-4259b0a35446"
          method="POST"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#D10000] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#D10000] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#D10000] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              required
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#D10000] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#D10000] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-col mt-6">
          <p className="font-extrabold underline text-gray-900 my-2 py-2 decoration-4 decoration-red-600 capitalize pt-2 tracking-wide">
            Mailing Address
          </p>
          <p className="mt-1 text-gray-500">
            Email - <a href="mailto:asever@uncc.edu">Ali Sever</a>
          </p>
          <div className="flex flex-row">
            <div className="w-1/2 pr-6">
              <p className="mt-1 text-gray-500">
                College of Computing & Informatics
                <br />
                Woodward Hall, 341A
                <br />
                University of North Carolina
                <br />
                Charlotte, NC 28262
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
