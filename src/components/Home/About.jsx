import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiTwotoneMail 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Siramasetty Vijaya Sai Dinesh </span>
                 and I'm from <span className="yellow">Vijayawada, Andhra Pradesh.</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in Electronics & Instrumentation Engineering in 2023.
                <br />
                <br />
                  As a
                  <b className="yellow"> Data Scientist</b>,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Machine Learning, </b>
                    and have knowledge in programming languages such as C, Javascript, Python, Node.js, along with experience in
                  <b className="yellow"> NLP, and Flask.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Machine Learning, Deep Learning</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Python libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> Flask, Spark, and Selenium</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building innovative
                  <i>
                    <b className="yellow"> Web Technologies, creating ML Predictions models</b>
                    and exploring various domains within
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Danny2389"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="naukri"
                    >
                      <img
                        src={require("../../assets/icons/Naukri.png")}
                        alt="Naukri"
                        style={{ width: "40px", height: "40px" }}
                      />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://linkedin.com/in/dinesh-siramasetty-0a3829302"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:siramasettydinesh@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiTwotoneMail  />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About