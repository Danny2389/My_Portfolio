import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Import framer-motion

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Animated section 1 */}
        <Col md="4" className="footer-copywright">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Dedicated to creating impactful solutions!
          </motion.span>
        </Col>

        {/* Animated section 2 */}
        <Col md="4" className="footer-copywright">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Copyright © {year}
          </motion.span>
        </Col>

        {/* Empty section */}
        <Col md="4" className="footer-body">
          {/* You can add additional content here if needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
