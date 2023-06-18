/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="overflow-x-none">
        <p className={styles.sectionSubText}>What we do</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a technology generalist transitioning to software engineering;
        passionate aboout bringing ideas to life through computer codes. I&apos;m
        skilled in JavaScript and Python; and frameworks such as React Native
        and the MERN stack. I am open to collaborating on interesting projects
        and entry/trainee software engineer roles. Lemme&apos; help you with the
        front-end for a start.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
