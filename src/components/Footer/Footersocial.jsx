import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // <-- ✅ Add this line
import {
  AiFillGithub,
  AiTwotoneMail 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
              <Row>
                <Col md={12} className="home-footer-social1">
                  <h1>FIND ME ON</h1>
                  <p>
                    Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                  </p>
                  <motion.ul
                    className="home-footer-social-links1"
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
          </Container>
        </Container>

      );
    
}

export default Footer