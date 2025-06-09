import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiPython,
} from "react-icons/di";
import {
  SiMysql,
  SiBootstrap,
  SiMongodb,
  SiSelenium,
  // SiHtml5,
  SiCypress
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} title="Html5/css" className="tech-icons hover-icon" style={{ color : '#43b02a'}}>
        <SiSelenium  /><span style={{ fontSize: '20px', display: 'block',color : '#43b02a' }}>Selenium</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon" style={{ margin: '50px', color : '#08ffff' }}>
        <SiCypress />
        <span style={{ fontSize: '20px', display: 'block' }}>Cypress</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
        <img
          src={require("../../assets/skills/aws.png")}
          title="AWS"
          alt="Tool Icon"
          style={{ width: "120px", height: "110px", filter: "invert(100%) brightness(200%)" }}
          className="img-fluid"
        /><span style={{ fontSize: '20px', display: 'block' }}>AWS</span>
      </Col>
      <Col xs={4} md={2} title="React.js" className="tech-icons hover-icon">
        <DiReact />
        <span style={{ fontSize: '20px', display: 'block' }}>React js</span>
      </Col>
      <Col xs={4} md={2} title="Python" className="tech-icons hover-icon">
        <DiPython />
        <span style={{ fontSize: '20px', display: 'block' }}>Python</span>
      </Col>
      <Col xs={4} md={2} title="Mongo DB" className="tech-icons hover-icon">
        <SiMongodb />
        <span style={{ fontSize: '20px', display: 'block' }}>Mongo DB</span>
      </Col>
      <Col xs={4} md={2} title="MySql" className="tech-icons hover-icon">
        <SiMysql />
        <span style={{ fontSize: '20px', display: 'block', color:'black' }}>MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon" style={{ margin: '50px' }}>
        <SiBootstrap />
        <span style={{ fontSize: '20px', display: 'block' }}>Bootstrap</span>
      </Col>
      <Col xs={4} md={2} title="JavaScript" className="tech-icons hover-icon">
        <DiJavascript1 /><span style={{ fontSize: '20px', display: 'block' }}>JavaScript</span>
      </Col>
      <Col xs={4} md={2} title="GitHub" className="tech-icons hover-icon">
        <DiGit />
        <span style={{ fontSize: '20px', display: 'block' }}>GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
        <img
          src={require("../../assets/skills/flask.png")}
          title="Flask"
          alt="Tool Icon"
          style={{ width: "90px", height: "90px", filter: "invert(100%) brightness(200%)" }}
          className="img-fluid"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
        <img
          src={require("../../assets/skills/deep-learning.png")}
          title="Deep Learning"
          alt="Tool Icon"
          style={{ width: "100px", height: "100px" }}
          className="img-fluid"
        /><span style={{ fontSize: '20px', display: 'block' }}><span style={{ color: 'rgb(137 200 114)' }}>D</span>
          <span style={{ color: 'rgb(216 125 203)' }}>L</span></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
        <img
          src={require("../../assets/skills/sql-server.png")}
          title="SQL"
          alt="Tool Icon"
          style={{ width: "90px", height: "90px" }}
          className="img-fluid"
        /><span style={{ fontSize: '20px', display: 'block', color: 'rgb(158 185 186)' }}>SQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
        <img
          src={require("../../assets/skills/coding.png")}
          title="Machine Learning (ML)"
          alt="Tool Icon"
          style={{ width: "90px", height: "90px" }}
          className="img-fluid"
        /><span style={{ fontSize: '20px', display: 'block' }}>
          <span style={{ color: '#5ecdac' }}>M</span>
          <span style={{ color: '#ed4d5d' }}>L</span>
          </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
        <img
          src={require("../../assets/skills/nlp.png")}
          title="Natural Language Processing"
          alt="Tool Icon"
          style={{ width: "90px", height: "90px" }}
          className="img-fluid"
        /><span style={{ fontSize: '20px', display: 'block' }}>
          <span style={{ color: 'rgb(237 237 237)' }}>N</span>
          <span style={{ color: ' rgb(78 132 231)' }}>L</span>
          <span style={{ color: 'rgb(237 208 116)' }}>P</span>
          </span>
      </Col>
    </Row>
  );
};

export default Techstack;
