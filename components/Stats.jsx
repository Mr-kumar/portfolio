"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "year of experience",
  },
  {
    num: 26,
    text: "number of projects made",
  },
  {
    num: 8,
    text: "technologies mastered",
  },
  {
    num: 500,
    text: "code commits",
  },
];

const Stats = () => {
  return (
    <section className="py-12 bg-gray-800 text-white mt-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent text-center relative">
          Our Achievements Till Now
        </h2>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <CountUp
                start={0}
                end={item.num}
                duration={2.75}
                separator=","
                className="text-4xl font-bold text-white"
              />
              <p className="mt-2 text-lg text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
