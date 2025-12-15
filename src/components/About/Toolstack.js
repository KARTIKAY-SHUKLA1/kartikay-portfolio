import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import { SiVercel, SiRender, SiNetlify } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" className="tech-icon-images" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel fontSize={"24px"} />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender fontSize={"24px"} />
        <div className="tech-icons-text">Render</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify fontSize={"24px"} />
        <div className="tech-icons-text">Netlify</div>
      </Col>
    </Row>
  );
}

export default Toolstack;