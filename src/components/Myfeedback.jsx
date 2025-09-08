import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Education = () => {
  return (
    <div className={`mt-12 bg-tertiary rounded-[20px] ${styles.padding}`}>
      {/* Heading */}
      <p className={styles.sectionSubText}>What I studied</p>
      <h2 className={styles.sectionHeadText}>Education</h2>

      {/* Education Details - Left aligned */}
      <div className="mt-6">
        <h3 className="text-white text-xl font-bold">
          B.Tech in Computer Science & Information Technology
        </h3>
        <p className="text-secondary text-lg">
          Mahatma Jyotiba Phule Rohilkhand University
        </p>
        <p className="text-secondary text-sm">(2015 - 2019)</p>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
