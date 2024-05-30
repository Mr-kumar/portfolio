"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "I'm working on full stack web development, utilizing the latest technologies like React and Next.js for dynamic user interfaces, Framer Motion for smooth animations, and Tailwind CSS for modern, responsive styling.And node js, php express js for building the Backened.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Data Science",
    description:
      "In addition to full stack web development, I'm also delving into data science, leveraging tools like Python, TensorFlow, and Pandas to analyze complex datasets, create predictive models, and extract meaningful insights to drive data-informed decisions.",
    href: "/data-science",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I'm passionate about UI/UX design, using the latest tools like Figma for prototyping, Sketch for designing, and Framer for creating interactive interfaces to ensure every application is intuitive, visually appealing, and provides an exceptional user experience.",
    href: "/ui-ux-design",
  },
  {
    num: "04",
    title: "Artificial Intelligence",
    description:
      "I'm deeply engaged in the field of artificial intelligence, working with cutting-edge technologies such as TensorFlow and PyTorch for developing and training machine learning models. My focus includes natural language processing, computer vision, and deep learning, aiming to create intelligent systems that can learn from data, adapt to new information, and provide insightful predictions and solutions.",
    href: "/artificial-intelligence",
  },
];

const Services = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-4 bg-gray-800 shadow-lg rounded-lg text-accent"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-md font-bold">{service.num}</div>
                  <Link href={service.href}>
                    <motion.div
                      onClick={() => setClickedIndex(index)}
                      animate={{ x: clickedIndex === index ? 10 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer p-2 rounded-full bg-white transition-all duration-500 flex justify-center items-center hover:bg-accent"
                    >
                      <BsArrowDownRight className="text-accent text-xl hover:text-white" />
                    </motion.div>
                  </Link>
                </div>
                <h2 className="text-2xl  font-bold mb-1 leading-none transition-all duration-500 hover:text-accent">
                  {service.title}
                </h2>
                <p className="text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
