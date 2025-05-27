import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import cert1 from "../../assets/certificates/Data_Science_Foundation.pdf";
import cert2 from "../../assets/certificates/Rubixe.pdf";
import cert3 from "../../assets/certificates/SytiqHub.pdf";
import cert4 from "../../assets/certificates/ICONAT.pdf";
import "./pdf.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const certificates = [
  { file: cert1, title: "Data Science Foundation", pages: 1 },
  { file: cert2, title: "Rubixe Internship", pages: 1 },
  { file: cert3, title: "SytiqHub Internship", pages: 1 },
  { file: cert4, title: "ICONAT_2023 Publication", pages: 4 },
];

const Pdfs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleZoomClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  return (
    <Container className="pt-5 text-center">
      <Row className="justify-content-center">
        {certificates.map((cert, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="certificate-box"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                height: "250px",
                borderRadius: "10px",
                boxShadow: "rgb(96 0 206 / 50%) -6px 3px 10px",
                padding: "20px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              {hoveredIndex === index ? (
                <>
                  <div
                    style={{
                      height: "100%",
                      overflowY: "auto",
                      borderRadius: "5px",
                      background: "#000000",
                    }}
                  >
                    <Document file={cert.file}>
                      {Array.from(new Array(cert.pages), (el, pageIndex) => (
                        <Page
                          key={`page_${pageIndex + 1}`}
                          pageNumber={pageIndex + 1}
                          scale={0.6}
                        />
                      ))}
                    </Document>
                  </div>
                  <Button
                    size="sm"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      fontWeight: "bold",
                      fontSize: "13px",
                      borderRadius: "20px",
                      backdropFilter: "blur(6px)", 
                      padding: "5px 8px",
                      boxShadow: "rgb(96 0 206 / 50%) -6px 3px 10px",
                      transition: "all 0.3s ease-in-out",
                      cursor: "pointer",
                    }}
                    onClick={() => handleZoomClick(cert)}
                  >
                    🔍
                  </Button>

                </>
              ) : (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "rgb(96 0 206)",
                  }}
                >
                  {cert.title}
                </div>
              )}
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Modal Viewer */}
      <Modal
  show={showModal}
  onHide={() => setShowModal(false)}
  centered
  backdropClassName="custom-backdrop"
  contentClassName="glass-modal"
>
  {selectedCert && (
    <div className="w-full flex justify-center px-4 sm:px-9">
      <Document file={selectedCert.file}>
        {Array.from(new Array(selectedCert.pages), (_, pageIndex) => (
          <Page
          
            className="transparent-pdf-page"
            key={`page_${pageIndex + 1}`}
            pageNumber={pageIndex + 1}
            width={Math.min(window.innerWidth * 0.85, 600)}
          />
        ))}
      </Document>
    </div>
  )}
</Modal>
    </Container>
  );
};

export default Pdfs;
