"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import PropTypes from "prop-types";

// Define socials array with correct keys
const socials = [
  { icon: <FaGithub aria-label="GitHub" />, path: "https://github.com" },
  { icon: <FaLinkedin aria-label="LinkedIn" />, path: "https://linkedin.com" },
  { icon: <FaYoutube aria-label="YouTube" />, path: "https://youtube.com" },
  { icon: <FaTwitter aria-label="Twitter" />, path: "https://twitter.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

Social.propTypes = {
  containerStyles: PropTypes.string,
  iconStyles: PropTypes.string,
};

export default Social;
