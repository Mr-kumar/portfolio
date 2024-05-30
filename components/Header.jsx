"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const closeMobileNav = () => {
    setIsMobileNavVisible(false);
  };

  return (
    <header className="py-4 lg:py-8 text-white bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold cursor-pointer text-accent">
            Creater <span className="text-accent"></span>
          </h1>
        </Link>

        {/* Desktop nav and hire me button */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/resume">
            <Button className="text-white bg-accent rounded-md">Hire Me</Button>
          </Link>
        </div>

        {/* Mobile nav toggle button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
            className="text-white focus:outline-none"
          >
            {isMobileNavVisible ? (
              <span>&#x2715; {/* Close icon (X) */}</span>
            ) : (
              <span>&#9776; {/* Menu icon (≡) */}</span>
            )}
          </button>
        </div>
      </div>

      {/* Overlay to detect outside clicks */}
      {isMobileNavVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMobileNav}
        ></div>
      )}

      {/* Mobile nav sidebar - Only for small devices */}
      <div className="lg:hidden ">
        {isMobileNavVisible && (
          <div
            className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out z-20 ${
              isMobileNavVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={closeMobileNav}
              className="text-white text-1xl absolute top-4 right-4 focus:outline-none"
            >
              &#x2715; {/* Close icon (X) */}
            </button>
            <div
              onClick={closeMobileNav}
              className="flex flex-col items-center"
            >
              <Nav />
              <Link href="/contact">
                <Button className="bg-yellow-500 mt-3">Hire Me</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
