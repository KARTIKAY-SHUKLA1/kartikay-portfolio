import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      
      {/* Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" className="tech-icon-images" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      
      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Supabase" className="tech-icon-images" />
        <div className="tech-icons-text">Supabase</div>
      </Col>
      
      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git & GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">Git & GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" className="tech-icon-images" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
    </Row>
  );
}

export default Techstack;