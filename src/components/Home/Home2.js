import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kartikay.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <span className="purple">Kartikay Shukla</span>, a developer who enjoys coding and understanding how software works behind the scenes. I'm currently pursuing my <span className="purple">B.Tech in Electronics and Communication Engineering</span> at{" "}
              <span className="purple">IIIT Kota</span> (Batch of 2027), with a strong interest in{" "}
              <span className="purple">software development roles</span>.
              <br />
              <br />
              I enjoy working with{" "}
              <i>
                <b className="purple">data structures, algorithms, and system logic</b>
              </i>
              , and I like writing code that is clean and efficient. My interests mainly lie in{" "}
              <i>
                <b className="purple">backend and full-stack development</b>
              </i>
              , and I regularly work with{" "}
              <b className="purple">C++, JavaScript, Node.js, React</b>, and modern web technologies.
              <br />
              <br />
              Alongside development, I actively practice{" "}
              <i>
                <b className="purple">competitive programming</b>
              </i>
              . I've solved{" "}
              <b className="purple">200+ problems on LeetCode</b>, hold a{" "}
              <b className="purple">3-star rating on CodeChef</b>, and have a{" "}
              <b className="purple">Specialist rating (Max 1437) on Codeforces</b>, which has strengthened my problem-solving skills.
              <br />
              <br />
              Currently, I'm focused on improving my fundamentals and preparing for{" "}
              <b className="purple">Software Development Engineer internships and entry-level roles</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;