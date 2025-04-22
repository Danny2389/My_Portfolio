import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Particle Effect */}
      <Particle />

      {/* Foreground Content */}
      <Container fluid className="home-section" id="home" style={{ position: "relative", zIndex: 1 }}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Dinesh, I turn data into decisions.</strong>
              </h1>
              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Additional Section */}
      <About />
    </section>
  );
}

export default Home;
