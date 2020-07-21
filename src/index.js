import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./styles.css";
import bg1 from "./bg.jpg";
import abtme from "./abtme.jpeg";
import oes from "./oes.png";
import tv from "./tv.png";
import infona from "./infona.png";

const Header = () => {
  return (
    <div id="header">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Cap = () => {
  return (
    <div>
      <div class="carousel-caption">
        <div class="text " id="text1">
          Hello! I'm
        </div>
        <div class="text " id="text2">
          B G Vinayak
        </div>
        <div class="text " id="text3">
          Student | Developer | Tech Enthusiast
        </div>
      </div>
    </div>
  );
};

const Img = () => {
  return (
    <div id="home">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        {/* <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol> */}

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="rounded" src={bg1} />
            <Cap />
          </div>

          {/* <div class="carousel-item">
            <img class="rounded" src={bg2} />
          </div>

          <div class="carousel-item">
            <img class="rounded" src={bg3} />
          </div> */}
        </div>

        {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a> */}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" class="about">
      <div id="abtdiv">
        <img id="abtimg" class="rounded-circle float-left" src={abtme} />
      </div>
      <div id="abtme">
        <h2 id="skls">ABOUT ME</h2>
        <p>
          Being a fresher, I am still learning and therefore need this
          opportunity to know more about this industry. Though I am new, I can
          vouch for the fact that I am a fast learner with a penchant to both
          learn and unlearn
        </p>

        <p>
          I also bring with me some fresh ideas and hope to discuss the same
          with my group. I am confident they will find many of them to be quite
          useful and innovative.
        </p>

        <p>
          If I am hired, I will strive to add maximum value to the company in
          terms of my eagerness to learn, dedication and strong work ethic to
          ensure a mutually beneficial professional partnership.
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills">
      <h1 id="skls">SKILLS</h1>
      <div class="skills">
        <div id="programming">
          <h2>PROGRAMMING</h2>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>

        <div id="frameworks">
          <h2>FRAMEWORKS</h2>
          <ul>
            <li>Django</li>
            <li>React</li>
            <li>Boostrap 4</li>
            <li>Selenium</li>
          </ul>
        </div>

        <div id="others">
          <h2>OTHERS</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Linux</li>
            <li>MYSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div id="projects">
      <div>
        <h1 id="pjcts">PROJECTS</h1>
      </div>
      <div class="project">
        <div id="oes">
          <img id="imgp" src={oes}></img>
          <h2>
            <a
              id="a"
              href="https://github.com/bhatvinayak/Online-Examination-System"
            >
              Online Examination System
            </a>
          </h2>
          <button
            class="btn btn-primary"
            data-toggle="collapse"
            data-target="#demo1"
          >
            Details
          </button>

          <div id="demo1" class="collapse">
            ONLINE EXAMINATION SYSTEM is a web-based examination system where
            examinations are given online. either through the internet or
            intranet using computer system. The main goal of this online
            examination system is to effectively evaluate the student thoroughly
            through a totally automated system that not only reduce the required
            time but also obtain fast and accurate results.
          </div>
        </div>

        <div id="tv">
          <img id="imgp" src={tv}></img>
          <h2>
            {" "}
            <a
              id="a"
              href="https://play.google.com/store/apps/details?id=com.bgvinayak.tv2k19&hl=en_IN"
            >
              TechVidya 2k19
            </a>{" "}
          </h2>
          <button
            class="btn btn-primary"
            data-toggle="collapse"
            data-target="#demo2"
          >
            Details
          </button>

          <div id="demo2" class="collapse">
            An android application made for state level college technical fest
            "TechVidya 2K19" which was put into good use.
          </div>
        </div>

        <div src="infona">
          <img id="imgp" src={infona}></img>
          <h2>
            {" "}
            <a id="a" href="https://github.com/bhatvinayak/Infona">
              {" "}
              Infona
            </a>{" "}
          </h2>
          <button
            class="btn btn-primary"
            data-toggle="collapse"
            data-target="#demo3"
          >
            Details
          </button>

          <div id="demo3" class="collapse">
            App has been developed under IEEE Bangalore section to provide
            people with preventive care information.Together, we can fight
            COVID-19. General advice: Preventive measures to be taken. News: App
            has a direct link to the tweets posted by WHO and MOHFW and a link
            to their official websites. People can self-evaluate by the symptoms
            given. If any Symptom is identified, you can access the medical
            helplines, WhatsApp medical channel etc. Donation: You have two
            hands. One to help your self and second to help others. The best way
            to help is by donating. The app has information and links where you
            can make your donations.
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="contact">
      <div>
        <h1 id="pjcts">CONTACT</h1>
      </div>
      <div id="footer">
        <div class="social-buttons">
          <a href="https://www.facebook.com/vinayak.bhat.777701">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/BGVinayak64">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/b_g_vinayak/?hl=en">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/bhatvinayak/">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/bgvinayak/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
render(<Img />, document.getElementById("img"));

render(<Header />, document.getElementById("head"));

render(<About />, document.getElementById("abt"));

render(<Skills />, document.getElementById("skills"));

render(<Project />, document.getElementById("projects"));

render(<Footer />, document.getElementById("footer"));
