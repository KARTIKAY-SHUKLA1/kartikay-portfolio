import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I AM</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <Toolstack />

          <h1 className="project-heading" style={{ paddingTop: "30px" }}>
            <strong className="purple">Concepts</strong> I Know
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">REST APIs</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">WebSockets</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">JWT Authentication</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">OAuth</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">System Design</div>
            </Col>
          </Row>

          <h1 className="project-heading">
            <strong className="purple">Coursework</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">Data Structures & Algorithms</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">OOP</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">DBMS</div>
            </Col>
            <Col xs={6} md={3} className="tech-icons">
              <div className="tech-icons-text">Operating Systems</div>
            </Col>
          </Row>

          {/* NEW ACHIEVEMENTS SECTION */}
          <h1 className="project-heading" style={{ paddingTop: "30px" }}>
            Achievements & <strong className="purple">Recognition</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={10}>
              <div className="quote-card-view" style={{ padding: "30px" }}>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li className="about-activity" style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                    <ImPointRight /> <span className="purple">Ranked Top 12 Globally</span> in CodeChef Starters 190
                  </li>
                  <li className="about-activity" style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                    <ImPointRight /> <span className="purple">Multiple Top 100 finishes</span> among 10,000+ participants on CodeChef
                  </li>
                  <li className="about-activity" style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                    <ImPointRight /> <span className="purple">3-Star Rating on CodeChef</span> (Max: 1651)
                  </li>
                  <li className="about-activity" style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                    <ImPointRight /> <span className="purple">Specialist on Codeforces</span> (Max: 1437)
                  </li>
                  <li className="about-activity" style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                    <ImPointRight /> Solved <span className="purple">200+ DSA Problems</span> on LeetCode
                  </li>
                  <li className="about-activity" style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                    <ImPointRight /> <span className="purple">Senior Social Media Member</span> at IIIT Kernel
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;