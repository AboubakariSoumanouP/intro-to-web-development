import React from "react";

function About(props) {
  return (
    <div className="about-container">
      <div>
        <h1>About Me</h1>
        <a href="Resume.pdf" target="_blank" download>
          Download Resume
        </a>
      </div>
      <div className="about-paragraph">
        <p>
          Hello there! My name is Aboubakari Soumanou Petoni. I am a senior
          student at Lehman College in my last semester. Prior to becoming a
          computer science student, I had my Bachelor in math. I love to solve
          problem. Whether it is finding the most elegant way to write a line of
          code or figuring out which chord fits best into a progression. I love
          the challenge of finding a way and discovering solutions. Wondering if
          I might be a good fit for your company? Check out my resume and my
          GitHub link!
        </p>
      </div>
    </div>
  );
}

export default About;
