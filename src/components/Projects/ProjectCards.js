import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#64ffda", fontSize: "1.5em", fontWeight: "600" }}>
          {props.title}
        </Card.Title>
        
        <Card.Text style={{ textAlign: "justify", color: "#8892b0", fontSize: "0.95em", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Badges */}
        {props.techStack && (
          <div style={{ marginTop: "15px", marginBottom: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {props.techStack.map((tech, index) => (
                <span
                  key={index}
                  style={{
                    padding: "5px 12px",
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                    border: "1px solid #64ffda",
                    borderRadius: "15px",
                    fontSize: "0.85em",
                    color: "#64ffda",
                    fontWeight: "500",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {props.features && (
          <div style={{ marginTop: "15px", marginBottom: "20px" }}>
            <h6 style={{ color: "#ccd6f6", fontSize: "0.9em", marginBottom: "10px" }}>
              Key Features:
            </h6>
            <ul style={{ color: "#8892b0", fontSize: "0.85em", paddingLeft: "20px", margin: 0 }}>
              {props.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{ flex: "1", minWidth: "120px" }}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ 
                flex: "1", 
                minWidth: "120px",
                backgroundColor: "#64ffda",
                borderColor: "#64ffda",
                color: "#0a192f",
                fontWeight: "600"
              }}
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;