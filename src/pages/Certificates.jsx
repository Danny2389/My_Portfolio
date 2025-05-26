import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from '../components/Particle'
import Certificates from "../components/Certificates/pdfs";


const Certificate = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <h1 className="section-heading mb-5">
        🎓 My <strong className="yellow">Certificates</strong>
      </h1>
            <motion.p
              className="section-heading"
              style={{ fontSize: "18px",color:'#e0e0e05e' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hover your mouse over the text,<br></br>
              and you should be able to access the certificate.
            </motion.p>
        <Certificates />
    </Container>
  )
}

export default Certificate;