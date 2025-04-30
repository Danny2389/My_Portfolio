import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; 
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
                <motion.p
                className="home-about-body"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, my name is <span className="yellow">Siramasetty Vijaya Sai Dinesh </span>
                and I'm from <span className="yellow">Vijayawada, Andhra Pradesh.</span>
                <br /><br />
                I recently graduated with a Bachelor's degree in Electronics & Instrumentation Engineering in 2023.
                <br /><br />
                As a <b className="yellow">Data Scientist</b>, I enjoy tackling new challenges and continuously expanding my skillset.
                <br /><br />
                I am proficient in <b className="yellow">Machine Learning,</b> and have knowledge in programming languages such as C, Javascript, Python, Node.js, along with experience in
                <b className="yellow"> NLP, and Flask.</b>
                <br /><br />
                I have a passion for working with <b className="yellow">Machine Learning, Deep Learning</b> and
                <i><b className="yellow"> modern Python libraries and frameworks</b></i> like
                <i><b className="yellow"> Flask, Spark, and Selenium</b></i>.
                <br /><br />
                I am also interested in building innovative
                <i><b className="yellow"> Web Technologies, creating ML Prediction models</b></i> and exploring
                <b className="yellow"> Artificial Intelligence.</b>
              </motion.p>
            </Col>

            <Col md={4} className="myAvtar">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <motion.ul
                  className="home-about-social-links"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {[
                    {
                      href: "https://github.com/Danny2389",
                      icon: <AiFillGithub />,
                      label: "github"
                    },
                    {
                      href: "https://www.naukri.com/mnjuser/profile?id=&altresid",
                      icon: <img src={require("../../assets/icons/Naukri.png")} alt="Naukri" style={{ width: "40px", height: "40px" }} />,
                      label: "naukri"
                    },
                    {
                      href: "https://linkedin.com/in/dinesh-siramasetty-0a3829302",
                      icon: <FaLinkedinIn />,
                      label: "linkedin"
                    },
                    {
                      href: "mailto:siramasettydinesh@gmail.com",
                      icon: <AiTwotoneMail />,
                      label: "email"
                    }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="social-icons"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      transition={{ type: "spring", stiffness: 120 }}
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        aria-label={item.label}
                      >
                        {item.icon}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>

      );
    
}

export default About