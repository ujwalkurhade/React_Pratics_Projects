import React from "react";
import "./Home.css";
import Navbar from "../src/Components/Navabar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <div className="heading">
          <div className="heading1">
            <h2>Hello! I'm Nikunj Thesiya</h2>
          </div>

          <div className="heading2">
            <p>
              A <b>Front End Developer | Web Designer </b>
            </p>
          </div>

          <div className="heading3">
            <p>
              with <div className="span">3.9+ year</div>{" "}
              Experience
            </p>
          </div>
        </div>
        <div className="btn">
          <div class="resume">Resume</div>
          <div class="hire">Hire</div>
        </div>
        <div className="profile">
          <div className="prof1">
            <div class="NextJs">NextJS</div>
            <div class="TailwindCSS">Tailwind CSS</div>
          </div>
          <div className="prof1">
            <div class="ReactJS">ReactJS</div>
            <div class="JavaSCRIPT">JavaSCRIPT</div>
          </div>
          <div className="prof1">
            <div class="GraphQl">GraphQl</div>
            <div class="Figma">Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
