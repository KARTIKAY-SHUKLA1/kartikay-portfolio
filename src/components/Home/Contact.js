import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiFillMail, AiFillPhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:kartikayshukla4141@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "center", paddingBottom: "30px" }}>
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "#8892b0", fontSize: "1.2em" }}>
              Feel free to reach out for opportunities or collaborations!
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5} style={{ paddingBottom: "50px" }}>
            <h3 style={{ color: "#64ffda", fontSize: "1.8em", paddingBottom: "20px" }}>
              Contact Info
            </h3>
            
            <div style={{ paddingBottom: "20px" }}>
              <h4 style={{ color: "#ccd6f6", fontSize: "1.2em" }}>
                <AiFillMail style={{ color: "#64ffda" }} /> Email
              </h4>
              <a href="mailto:kartikayshukla4141@gmail.com" style={{ color: "#8892b0", textDecoration: "none" }}>
                kartikayshukla4141@gmail.com
              </a>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <h4 style={{ color: "#ccd6f6", fontSize: "1.2em" }}>
                <AiFillPhone style={{ color: "#64ffda" }} /> Phone
              </h4>
              <p style={{ color: "#8892b0", margin: 0 }}>+91 9336166298</p>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <h4 style={{ color: "#ccd6f6", fontSize: "1.2em" }}>
                <FaMapMarkerAlt style={{ color: "#64ffda" }} /> Location
              </h4>
              <p style={{ color: "#8892b0", margin: 0 }}>Kanpur, India</p>
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(100, 255, 218, 0.2)" }}>
              <h4 style={{ color: "#64ffda", fontSize: "1.2em", paddingBottom: "15px", paddingTop: "20px" }}>
                Connect With Me
              </h4>
              <ul className="home-about-social-links" style={{ textAlign: "left", paddingLeft: 0 }}>
                <li className="social-icons">
                  <a
                    href="https://github.com/KARTIKAY-SHUKLA1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/kartikay-shukla/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/u/KARTIKAY_SHUKLA/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LeetCode"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.codechef.com/users/kartikay4578"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="CodeChef"
                  >
                    <SiCodechef />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://codeforces.com/profile/KARTIK_4578"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="Codeforces"
                  >
                    <SiCodeforces />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={7}>
            <div className="quote-card-view" style={{ padding: "40px" }}>
              <h3 style={{ color: "#64ffda", fontSize: "1.8em", paddingBottom: "20px" }}>
                Send a Message
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#ccd6f6" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(100, 255, 218, 0.05)",
                      border: "1px solid #64ffda",
                      color: "#ccd6f6",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#ccd6f6" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(100, 255, 218, 0.05)",
                      border: "1px solid #64ffda",
                      color: "#ccd6f6",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#ccd6f6" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(100, 255, 218, 0.05)",
                      border: "1px solid #64ffda",
                      color: "#ccd6f6",
                    }}
                  />
                </Form.Group>

                <Button type="submit" className="btn-primary">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;