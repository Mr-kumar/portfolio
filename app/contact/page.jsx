"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.6, ease: "easeIn" },
          }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Let&apos;s Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col p-6 bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent text-center">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-accent text-white font-bold rounded-lg shadow-lg focus:outline-none"
                >
                  Send
                </motion.button>
              </form>
            </div>
            <div className="flex flex-col p-6  bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-accent">Get In Touch</h3>
              <p className="text-base mb-4 ">
                Feel free to reach out if you have any questions or just want to
                connect.
              </p>
              <div className="mb-4">
                <p className="text-lg font-bold text-amber-300">Email:</p>
                <p>gt5kumaranhdh@gmail.com</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold text-amber-200">Phone:</p>
                <p>(+91) 9508868029</p>
              </div>
              <h1 className="text-accent">Follow me</h1>
              <div className="flex space-x-6 mt-4 shadow-md  items-center">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaFacebook className="text-2xl hover:text-primary" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaTwitter className="text-2xl hover:text-accent" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaLinkedin className="text-2xl hover:text-accent" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaGithub className="text-2xl hover:text-accent" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
