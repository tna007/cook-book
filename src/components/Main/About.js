import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">Anh To</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>
              Hey! Glad to see you here. I am a web development in progress and
              I use ReactJS and PHP mainly as my programming languages. This
              project is meant to be a simple cook book that can be used as a
              recipes browser for everyone in everyday. You're cooking something
              today?
            </h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a
                href="https://github.com/tna007/cook-book"
                target="_blank"
                rel="norefferer"
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
