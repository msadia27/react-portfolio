import React from "react";
import coverImage from "../../assets/cover/me.jpg";

function About() {
  return (
    <section className="my-5">
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>NYC. Travel. Food. Shopping. New Full Stack Developer Loading...</p>
      </div>
    </section>
  );
}

export default About;
