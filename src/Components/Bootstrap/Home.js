import React from "react";
import web from "../../assets/fotis-fotopoulos-SyvsTmuuZyM-unsplash.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
