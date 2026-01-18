import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiNetlify,
    SiVercel,
    SiPycharm,
} from "react-icons/si";

const Toolstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
                <span style={{ fontSize: '20px', display: 'block' }}>VS Code</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPycharm />
                <span style={{ fontSize: '20px', display: 'block' }}>PyCharm</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img
                    src={require("../../assets/skills/react-bootstrap.png")}
                    alt="React Bootstrap"
                    className="img-fluid"
                    style={{ width: "100px" }}
                />
                <span style={{color: 'rgb(59 209 237)', fontSize: '20px', display: 'block' }}>React Bootstrap</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNetlify />
                <span style={{ fontSize: '20px', display: 'block' }}>Netlify</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
                <span style={{ fontSize: '20px', display: 'block' }}>Vercel</span>
            </Col>
        </Row>
    );
};

export default Toolstack;
