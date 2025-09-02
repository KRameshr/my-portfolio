import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-justify leading-relaxed max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80"
      >
        Welcome to my portfolio! It highlights my work in{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          web development
        </span>{" "}
        and{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          graphic design
        </span>
        , showcasing my ability to build{" "}
        <span className="italic">responsive, user-friendly applications</span>{" "}
        as well as{" "}
        <span className="italic">creative, visually appealing designs</span>.
        Each project reflects my dedication to combining technology and
        creativity to deliver impactful solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index, link) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 p-4 duration-500 group-hover:bottom-7">
              {/* Title on top */}
              <h2 className="font-semibold truncate text-lg">
                {project.title}
              </h2>

              {/* Description + Icon in horizontal row */}
              <div className="flex justify-between items-center mt-2">
                {/* Description */}
                <p className="text-sm text-gray-700 line-clamp-2 flex-1 mr-3">
                  {project.description}
                </p>

                {/* Icon */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        alt="send icon"
                        src={assets.send_icon}
                        className="w-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/KRameshr?tab=repositories"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        aria-label="Show more projects"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
