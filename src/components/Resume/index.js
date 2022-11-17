import React from "react";
import resumePic from "../../assets/resume/MSadia_Resume.pdf";
import resumeFile from "../../assets/resume/resume.jpg";

const resume = () => {
  return (
    <div>
      <a download={resumeFile} href={resumePic}>
        <img src={resumePic} alt="resume" />
      </a>
    </div>
  );
};

export default resume;
