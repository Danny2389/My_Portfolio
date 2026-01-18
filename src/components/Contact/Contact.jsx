import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import contact from "../../assets/contact.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Importing framer-motion
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    company_name: "",
    from_name: "",
    reply_to: "",
    contact_info: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    error: false,
    success: false,
    submitting: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus((prev) => ({ ...prev, error: false, success: false }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ error: false, success: false, submitting: true });

    const { from_name, reply_to, message, company_name } = formData;

    if (!from_name || !reply_to || !message || !company_name) {
      setFormStatus({ error: true, success: false, submitting: false });
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setFormStatus({ success: true, error: false, submitting: false });
          setFormData({
            company_name: "",
            from_name: "",
            reply_to: "",
            contact_info: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setFormStatus({ error: true, success: false, submitting: false });
        }
      );
  };

  return (
    <Container className="section-heading" style={{ paddingTop: "100px" }}>
      <Row>
        <Col md={6} className="c-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.h1
            className="yellow"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Contact me <Tilt><img src={contact} className="img-fluid" alt="avatar" style={{ width: "450px", height: "auto" }} /></Tilt>
          </motion.h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <motion.input
              type="text"
              name="company_name"
              className="user c-left"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleChange}
              required
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.input
              type="text"
              name="contact_info"
              className="user c-left"
              placeholder="Contact Number (Optional)"
              value={formData.contact_info}
              onChange={handleChange}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
            <motion.input
              type="text"
              name="from_name"
              className="user c-left"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.input
              type="email"
              name="reply_to"
              className="user c-left"
              placeholder="Your Email"
              value={formData.reply_to}
              onChange={handleChange}
              required
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.textarea
              name="message"
              className="user c-left"
              placeholder="Message Here"
              value={formData.message}
              onChange={handleChange}
              required
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            {formStatus.error && (
              <motion.span
                className="not-done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                ❌ Failed to send. Please check your connection or try again.
              </motion.span>
            )}
            {formStatus.success && (
              <motion.span
                className="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                ✅ Message sent successfully! I will get back to you soon.
              </motion.span>
            )}
            <motion.span
              className="not-done"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Button type="submit" className="button" disabled={formStatus.submitting}>
                {formStatus.submitting ? "Sending..." : "Send"}
              </Button></motion.span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
