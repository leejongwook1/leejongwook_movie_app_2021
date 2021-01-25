import React from "react";
import "../routes/About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Hope it can be helpful to those who love and love movies. Welcome!!”
      </span>
      <span>− lee jong wook</span>
    </div>
  );
}

export default About;
