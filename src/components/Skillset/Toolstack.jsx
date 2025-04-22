import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPycharm,
  SiHeroku,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} title="VS_Code" className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} title="Pycharm" className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/react-bootstrap.png")} title="React+Bootstrap" alt="Tool Icon" style={{ width: "90px", height: "90px" }} className="img-fluid"/>

      </Col>
      <Col xs={4} md={2} title="Netlify" className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} title="Heruku" className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
