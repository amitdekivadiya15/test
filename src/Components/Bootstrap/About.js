import React from "react";
import web from "../../assets/Technology-Company-in-Salinas-1080x675.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
