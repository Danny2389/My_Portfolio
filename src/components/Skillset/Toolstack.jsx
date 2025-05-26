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
        <SiVisualstudiocode /><span style={{ fontSize: '20px', display: 'block' }}>VS Code</span>
      </Col>
      <Col xs={4} md={2} title="Pycharm" className="tech-icons">
        <SiPycharm /><span style={{ fontSize: '20px', display: 'block' }}>Pycharm</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={require("../../assets/skills/react-bootstrap.png")} title="React+Bootstrap" alt="Tool Icon" style={{ width: "90px", height: "90px" }} className="img-fluid"/>
      <span style={{ fontSize: '16px', display: 'block', color: '#3bd1ed'}}>React|Boots</span>
      </Col>
      <Col xs={4} md={2} title="Netlify" className="tech-icons">
        <SiNetlify /><span style={{ fontSize: '20px', display: 'block' }}>Netlify</span>
      </Col>
      <Col xs={4} md={2} title="Heruku" className="tech-icons">
        <SiHeroku /><span style={{ fontSize: '20px', display: 'block' }}>Heruku</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
