import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full max-w-6xl mx-auto px-5 py-10 scroll-mt-20 mt-64 md:mt-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          {/* <p className="mb-10 max-w-2xl font-Ovo text-justify leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 hover:scale-[1.01] transition-transform duration-300">
            I am Ramesh, a passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              MERN stack developer
            </span>{" "}
            and
            <span className="font-semibold">
              {" "}
              B.Tech graduate in Electrical & Electronics Engineering
            </span>{" "}
            with a strong foundation in both design and development. I
            specialize in building{" "}
            <span className="font-semibold">
              scalable, responsive, and user-friendly web applications
            </span>
            using React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS,
            while also bringing creativity through graphic design skills in
            Photoshop, Illustrator, and After Effects.
            <br />
            <br />I believe every project is an opportunity to solve real-world
            problems. My focus is on understanding client needs, translating
            them into{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              efficient digital solutions
            </span>
            , and delivering results that combine technical precision with
            creative impact.
            <br />
            <br />
            Dedicated to continuous learning and professional growth, I aim to
            create solutions that not only meet business goals but also provide
            engaging and reliable experiences for end users.
          </p> */}
<p className="mb-10 max-w-2xl font-Ovo text-justify leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 hover:scale-[1.01] transition-transform duration-300">
 Hello everyone! My name is <span className="font-semibold text-blue-600 dark:text-blue-400">K. Ramesh</span>, and I am an enthusiastic{" "}
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    MERN stack developer
  </span>{" "}
  and
  <span className="font-semibold">
    {" "}
    B.Tech graduate in Electrical & Electronics Engineering
  </span>
  , with a strong interest in building web applications and learning modern technologies. I have also completed a{" "}
  <span className="font-semibold text-purple-600 dark:text-purple-400">
  Post-Executive Graduate Certificate in Full Stack Web Development
</span>{" "}
from <span className="font-semibold">IIT Roorkee (iHub)</span> —{" "}
<a
  href="https://tih.iitr.ac.in/certificate/intellipaat/IPTIH25090256.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
>
  view certificate
</a>
,which helped me strengthen my skills in web development.  

  I enjoy creating{" "}
  <span className="font-semibold">
    responsive and user-friendly web applications
  </span>{" "}
  using React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. I also dedicate my free time to learning and practicing{" "}
  <span className="font-semibold">Photoshop, Premiere Pro, and After Effects</span>
  {" "}to improve my creative and multimedia skills.  

  I am eager to take on projects that challenge me to learn and grow. My goal is to deliver{" "}
  <span className="font-semibold text-green-600 dark:text-green-400">
    practical and well-crafted digital solutions
  </span>
  , while continuously improving my skills and gaining professional experience.  
</p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <div className="w-full max-w-md overflow-hidden">
                  <p className="text-gray-600 text-xs md:text-sm dark:text-white/80 break-words leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
