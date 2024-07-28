import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="hedabo">
        <div>
          <div className="hed1">
            <div className="img">
              <img
                src="https://nikunjthesiya.vercel.app/_next/static/media/hero-main.f58be97d.svg"
                width="45px"
                height="45px"
              />
            </div>
            <h2>I Love</h2>
          </div>
          <div className="intreast">
            <div className="intrest1">
              <div className="In">Listening to Music</div>
              <div className="In">Travelling</div>
            </div>
            <div className="intrest2">
              <div class="In">Mounting</div>
              <div class="In">Money</div>
            </div>
          </div>
        </div>

        <div className="ExpProj">
          <div className="Exp">
            <h1>3.9+</h1> Years Experience
          </div>
          <div className="Proj">
            <h1>20+</h1>Project Completed
          </div>
        </div>
      </div>

      <div className="mySelf">
        <p>
          A passionate Front End Developer with a Master's
          in Computer Application and over 3.9 years of
          experience in crafting captivating digital
          experiences. My expertise lies in leveraging
          cutting-edge technologies such as ReactJS,
          NextJS, Apollo GraphQL, Redux, React Query, and
          various UI frameworks including Material UI,
          NextUI, SCSS, Tailwind CSS, Chakra UI, and
          Bootstrap. I take pride in my ability to design
          seamless user interfaces and components that
          align perfectly with the intended aesthetic,
          creating responsive websites that adapt
          gracefully to any device. My skill set also
          extends to proficient API integration, ensuring
          the seamless flow of data between the front end
          and back end. In addition, I am known for writing
          clean, well-structured code that not only
          functions flawlessly but also enhances the
          overall maintainability of projects. With a track
          record of contributing to well-known products
          like CricTracker, SportsBuzz, and Epiko Market, I
          am committed to pushing the boundaries of web
          development to deliver exceptional digital
          solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
