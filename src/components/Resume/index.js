import React from "react";
import resumePic from "../../assets/resume/Msadia_Resume.pdf";
import resume from "../../assets/resume/resume.jpg";

const resume = () => {
  return (
    <div>
      <a download={resume} href={resumePic}>
        <img src={resumePic} alt="resume" />
      </a>
    </div>
  );
};

export default resume;
