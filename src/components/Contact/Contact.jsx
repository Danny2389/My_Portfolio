// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus({ error: false, success: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, reply_to, message, company_name, contact_info } = formData;

    if (!from_name || !reply_to || !message || !company_name || !contact_info) {
      setFormStatus({ error: true, success: false });
      return;
    }

    emailjs
      .sendForm(
        "service_msrxzy7", // ✅ YOUR SERVICE ID
        "template_mrgixqm", // ✅ YOUR TEMPLATE ID
        form.current,
        "4JTtnu4FId60vAbq1" // ✅ YOUR PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setFormStatus({ success: true, error: false });
          setFormData({
            from_name: "",
            reply_to: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setFormStatus({ error: true, success: false });
        }
      );
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
          <input
              type="text"
              name="company_name"
              className="user c-left"
              placeholder="Comapany Name"
              value={formData.company_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contact_info"
              className="user c-left"
              placeholder="Contact"
              value={formData.contact_info}
              onChange={handleChange}
            />
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Your Email"
              value={formData.reply_to}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {formStatus.error && (
              <span className="not-done">
                ❌ Please fill in all the fields correctly.
              </span>
            )}
            {formStatus.success && (
              <span className="done">
                ✅ Message sent successfully! I will get back to you soon.
              </span>
            )}
            <Button type="submit" className="button">
              Send
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;