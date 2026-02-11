import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>My Contact.</h3>

        {/* Contact Information */}
        <div className="mt-12 flex flex-col gap-8 text-white text-lg">
          <div>
            <p className="font-medium">Name</p>
            <p>Amrit Bharti</p>
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p>amrit15cs06ru@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p>8726880125</p>
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <Link to="https://www.linkedin.com/in/amrit-bharti-0ba4bb156/">linkedin.com/in/amrit-bharti-0ba4bb156</Link >
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/resume.pdf" // put resume.pdf inside public/ folder
            download
            className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-blue-800 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
