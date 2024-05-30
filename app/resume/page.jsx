"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const EducationCard = () => {
  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center mb-2">
          <FaGraduationCap className="text-xl text-accent-600 mr-2" />
          <h3 className="text-md font-bold hover:text-accent">
            Bachelor's Degree in Computer Science and Engineering
          </h3>
        </div>
        <p class="text-gray-700">
          Currently pursuing a B.Tech in Computer Science from
          <br />
          <span class=" font-semibold">
            Indian Institute of Information Technology
          </span>
        </p>
      </div>
    </motion.div>
  );
};

const CertificationCard = () => {
  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4  hover:text-accent">
        <div className="flex items-center mb-2">
          <FaCertificate className="text-xl text-accent-600 mr-2" />
          <h3 className="text-lg font-semibold">
            Certification in Software development
          </h3>
        </div>
        <p class="text-gray-700">
          I completed an Industrial Training program of 8 weeks at <br />
          <span class="font-semibold">
            Indraprasth Institute of Science and Technology, Delhi
          </span>
        </p>
      </div>
    </motion.div>
  );
};

const ExperienceCard = () => {
  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 hover:text-accent">
        <div className="flex items-center mb-2">
          <FaBriefcase className="text-xl text-accent-600 mr-2" />
          <h3 className="text-lg font-semibold">Software Developer</h3>
        </div>
              <p className="text-gray-700">
                  Currently i done a project on the Software developer.My project is make a software that is Indian Railways management system using the method of the "FUZZY TOPSIS".

        </p>
      </div>
    </motion.div>
  );
};

const BackendCard = () => {
  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="bg-white p-4 rounded-lg shadow-md  hover:text-accent">
        <div className="flex items-center mb-2">
          <FaBriefcase className="text-xl text-accent-600 mr-2" />
          <h3 className="text-lg font-semibold">Full Stack Developer</h3>
        </div>
        <p className="text-gray-700">
          I done lots of real time project using the most latest Software that
          is next js ,react js,php.currently I'm working on a real time project
          using the next js.
        </p>
      </div>
    </motion.div>
  );
};

const TechnicalSkillCard = ({ icon, skill }) => {
  const Icon = icon;
  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center ">
        <div className="mr-4">
          <Icon className="text-xl text-accent-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{skill}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
      <p className="text-lg mb-8 text-center">
        Check out my technical and soft skills.
      </p>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <TechnicalSkillCard icon={FaHtml5} skill="HTML5" />
          <TechnicalSkillCard icon={FaCss3} skill="CSS3" />
          <TechnicalSkillCard icon={FaJs} skill="JavaScript" />
          <TechnicalSkillCard icon={FaReact} skill="React.js" />
          <TechnicalSkillCard icon={FaPython} skill="Python" />
          <TechnicalSkillCard icon={FaNodeJs} skill="Node.js" />
          <TechnicalSkillCard icon={FaPhp} skill="PHP" />
          <TechnicalSkillCard icon={FaDatabase} skill="MongoDB" />
          <TechnicalSkillCard icon={FaDatabase} skill="MySQL" />
          {/* Add more skills here */}
        </div>
      </div>
    </section>
  );
};

const ResumePage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">My Resume</h1>
        <p className="text-lg mb-8">
          Welcome to my professional resume page! Below, you'll find a
          comprehensive overview of my skills, qualifications, and experience in
          the field of web development.
        </p>
        <div className="flex flex-col lg:flex-row justify-between mt-12 space-y-8 lg:space-y-0">
          {/* Left Container */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Education & Certifications
              </h2>
              {/* List of Education & Certifications Cards */}
              <EducationCard />
              <CertificationCard />
            </div>
          </div>
          {/* Right Container */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              {/* List of Experience Cards */}
              <ExperienceCard />
              <BackendCard />
            </div>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <SkillsSection />
    </section>
  );
};

export default ResumePage;
