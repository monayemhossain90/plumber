import React from "react";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div className="container row mx-auto text-center my-5">
      <h2 className="text-success">About Me</h2>
      <div className="col-12 col-md-6 mx-auto mt-3 shadow">
        <img className="w-100 my-5" src={about} alt="" />
        <h3>About Plumbing</h3>
        <p className="lead">
          Your Neighborhood Plumber. Your best choice for plumbing services in
         Dhaka
        </p>
      </div>
    </div>
  );
};

export default About;
