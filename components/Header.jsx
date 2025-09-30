import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile picture"
          width={128}
          height={128}
          className="rounded-full w-32 h-32 object-cover mt-64 md:mt-12"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm K Ramesh <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-6xl lg:text-[52px] font-Ovo text-center tracking-tight 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             bg-clip-text text-transparent 
             hover:scale-105 transition-transform duration-300"
      >
        Web Programmer based in India.
      </motion.h1>

      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-justify leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 hover:scale-[1.01] transition-transform duration-300"
      >
        <p className="max-w-2xl mx-auto font-Ovo text-justify leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
          I am a dedicated{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            MERN stack developer
          </span>{" "}
          with hands-on experience in building full-stack web applications.
          Skilled in
          <span className="font-semibold"> React</span>,
          <span className="font-semibold"> Next.js</span>,
          <span className="font-semibold"> Node.js</span>,
          <span className="font-semibold"> Express</span>,
          <span className="font-semibold"> MongoDB</span>, and
          <span className="font-semibold"> Tailwind CSS</span>, I specialize in
          creating responsive, scalable, and user-friendly solutions. My
          projects include a dynamic personal portfolio, a full-stack blog
          platform with admin features, and an{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            AI-powered creative platform
          </span>{" "}
          that generates articles, blogs, images, and resume reviews by
          integrating
          <span className="font-semibold"> Gemini</span> and
          <span className="font-semibold"> ClipDrop AI APIs</span> with
          <span className="font-semibold"> Cloudinary</span>. I am passionate
          about continuous learning and leveraging modern technologies to
          deliver impactful digital experiences.
        </p>
        .
      </motion.p> */}
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="max-w-2xl mx-auto font-Ovo text-justify leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 hover:scale-[1.01] transition-transform duration-300"
>
  I am a dedicated{" "}
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    MERN stack developer
  </span>{" "}
  with hands-on experience building full-stack web applications. Skilled in{" "}
  <span className="font-semibold">React</span>,{" "}
  <span className="font-semibold">Next.js</span>,{" "}
  <span className="font-semibold">Node.js</span>,{" "}
  <span className="font-semibold">Express</span>,{" "}
  <span className="font-semibold">MongoDB</span>, and{" "}
  <span className="font-semibold">Tailwind CSS</span>, I create responsive,
  scalable, and user-friendly solutions.  

  My projects include a dynamic personal portfolio, a full-stack blog platform
  with admin features, and an{" "}
  <a
    href="https://todays-ai.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
  >
    AI-powered creative platform
  </a>{" "}
  that generates articles, blogs, images, and resume reviews by integrating{" "}
  <span className="font-semibold">Gemini</span> and{" "}
  <span className="font-semibold">ClipDrop AI APIs</span> with{" "}
  <span className="font-semibold">Cloudinary</span>.  

  I am passionate about continuous learning and leveraging modern technologies
  to deliver impactful digital experiences.
</motion.p>


      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Kuruba_Ramesh_MERN_Developer.pdf" // <-- use absolute path from 'public'
          download // <-- tells browser to download the file
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
