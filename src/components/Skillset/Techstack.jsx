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
  SiHtml5
} from "react-icons/si";
const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} title="Html5/css" className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} title="JavaScript" className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/aws.png")} title="AWS" alt="Tool Icon" style={{ width: "120px", height: "110px", filter: "invert(100%) brightness(200%)" }} 
      className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} title="React.js" className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} title="Python" className="tech-icons">
        <DiPython  />
      </Col>
      <Col xs={4} md={2} title="Mongo DB" className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} title="MySql" className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} title="Bootstrap" className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/neural-network.png")} title="Neural Network" alt="Tool Icon" style={{ width: "90px", height: "90px" }} className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} title="GitHub" className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/flask.png")} title="Flask" alt="Tool Icon" style={{ width: "90px", height: "90px", filter: "invert(100%) brightness(200%)" }} 
      className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/deep-learning.png")} title="Deep Learning" alt="Tool Icon" style={{ width: "100px", height: "100px" }} className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/sql-server.png")} alt="Tool Icon" style={{ width: "90px", height: "90px" }} className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/coding.png")} title="Machine Learning (ML)" alt="Tool Icon" style={{ width: "90px", height: "90px" }} className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons hover-icon">
      <img src={require("../../assets/skills/nlp.png")} title="Natural Language Processing" alt="Tool Icon" style={{ width: "90px", height: "90px" }} className="img-fluid"/>
      </Col>
    </Row>
  );
}

export default Techstack;
