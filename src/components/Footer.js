import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kartikay Shukla</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/KARTIKAY-SHUKLA1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kartikay-shukla/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/KARTIKAY_SHUKLA/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/kartikay4578"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CodeChef"
              >
                <SiCodechef />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/KARTIK_4578"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Codeforces"
              >
                <SiCodeforces />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;