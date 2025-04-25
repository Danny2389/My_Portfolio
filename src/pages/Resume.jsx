import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import Particle from '../components/Particle'
import pdf from "../assets/pdf/DINESH_SIRAMASETTY.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Button hover effect variant
  const buttonVariant = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 }
    }
  };

  // Fade-in effect for the resume document
  const pdfVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <motion.div
            variants={buttonVariant}
            initial="initial"
            animate="visible"
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </motion.div>
        </Row>

        <Row className="resume">
          <motion.div
            variants={pdfVariant}
            initial="hidden"
            animate="visible"
            className="d-flex justify-content-center"
          >
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </motion.div>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
