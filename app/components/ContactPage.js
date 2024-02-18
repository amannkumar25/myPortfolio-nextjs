import React from "react";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section id="contacts">
      <h2 className="text-center text-4xl font-bold text-white my-8">
        Contact Me
      </h2>
      <div className="px-4 py-4">
        <div className="flex flex-wrap justify-between">
          <div className="basis-1/3">
            <p className="mt-5 flex items-center text-xl text-white">
              <i className="text-[#9b59b6] mr-4 text-3xl">
                <CgMail />
              </i>{" "}
              kumartheaman47@gmail.com
            </p>
            <p className="mt-5 flex items-center text-xl text-white">
              <i className="text-[#9b59b6] mr-4 text-3xl">
                <IoCall />
              </i>{" "}
              9643465305
            </p>
            <div className="mt-5 flex py-5">
              <Link
                href="https://www.linkedin.com/in/aman-kumar-08478622a"
                className="text-3xl mr-3 text-[#ababab] inline-block hover:text-[#9b59b6]"
              >
                <IoLogoLinkedin />
              </Link>
              <Link
                href="https://github.com/amannkumar25"
                className="text-3xl mr-3 text-[#ababab] inline-block hover:text-[#9b59b6]"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.hackerrank.com/kumartheaman47"
                className="text-3xl mr-3 text-[#ababab] inline-block hover:text-[#9b59b6]"
              >
                <FaHackerrank />
              </Link>
            </div>
          </div>
          <div className="basis-3/5">
            <form className="">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="md:w-full border-0 outline-none bg-[#262626] p-4 my-4 text-white text-lg rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your email"
                className="md:w-full border-0 outline-none bg-[#262626] p-4 my-4 text-white text-lg rounded-md"
                required
              />
              <textarea
                name="message"
                row={5}
                placeholder="Enter Your Message"
                className="md:w-full border-0 outline-none bg-[#262626] p-4 my-4 text-white text-lg rounded-md"
              ></textarea>
              <button
                type="submit"
                className="px-14 py-4 text-lg mt-20 cursor-pointer text-center block w-fit-content bg-purple-600 p-4 rounded-lg no-underline text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
