import React from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <div className="row banner">
        <div className="banner-text">
          <Fade direction="down">
            <h1 className="responsive-headline">Anh To</h1>
          </Fade>
          <Fade direction="up">
            <p>
              Hey! Glad to see you here. I am a web dev in progress and I use
              ReactJS and PHP mainly as my programming languages. This project
              is meant to be a simple cook book that can be used as a recipes
              browser for everyone in everyday. You're cooking something today?
            </p>
          </Fade>
          <hr />
          <Fade direction="left">
            <ul className="social d-flex ps-0">
              <a
                href="https://github.com/tna007/cook-book"
                target="_blank"
                rel="noreferrer"
                className="button btn project-btn"
              >
                <i className="fa fa-book"></i>Project
              </a>
              <a
                href="https://github.com/tna007"
                target="_blank"
                rel="noreferrer"
                className="button btn github-btn"
              >
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </Fade>
        </div>
      </div>
      <ParticlesBg type="cobweb"></ParticlesBg>
    </>
  );
};

export default About;
