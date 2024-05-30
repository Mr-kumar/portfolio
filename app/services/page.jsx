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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta veniam consequuntur earum molestias quae facilis enim reprehenderit, corrupti accusamus corporis modi soluta dolore aspernatur ea, officia est nisi odio",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta veniam consequuntur earum molestias quae facilis enim reprehenderit, corrupti accusamus corporis modi soluta dolore aspernatur ea, officia est nisi odio",
    href: "/data-science",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta veniam consequuntur earum molestias quae facilis enim reprehenderit, corrupti accusamus corporis modi soluta dolore aspernatur ea, officia est nisi odio",
    href: "/ui-ux-design",
  },
  {
    num: "04",
    title: "Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta veniam consequuntur earum molestias quae facilis enim reprehenderit, corrupti accusamus corporis modi soluta dolore aspernatur ea, officia est nisi odio",
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
