import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail"
            className="w-6"
          />
          krameshr348@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[5%] mt-12 py-12">
        <p className="text-gray-700 dark:text-gray-300">
          © 2025 kramesh. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center gap-4 justify-center mt-4 sm:mt-0 text-blue-600 dark:text-blue-400 font-medium">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kRameshr/"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kurubaramesh"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
