import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import devlinkr from "../../Assets/Projects/devlinkr.png";
import codelens from "../../Assets/Projects/codelens.png";
import hyrify from "../../Assets/Projects/hyrify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#8892b0" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devlinkr}
              isBlog={false}
              title="DevLinkr"
              description="Smart Pair Programming and Networking Platform built for real-time code collaboration. Features integrated Monaco Editor for live coding sessions and Judge0 API for instant code execution with sub-150ms latency."
              techStack={["React", "Node.js", "Socket.io", "MongoDB", "Express"]}
              features={[
                "Real-time code collaboration",
                "Judge0 API integration (<150ms)",
                "OTP-based JWT authentication",
                "Skill-based matching algorithm",
                "100+ beta users acquired"
              ]}
              ghLink="https://github.com/KARTIKAY-SHUKLA1/DEVLINKR"
              demoLink="https://devlinkr-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codelens}
              isBlog={false}
              title="CodeLens"
              description="AI-Powered Code Review Platform that analyzes code quality across 12+ programming languages. Features intelligent suggestions for complexity, maintainability, and best practices with real-time analytics."
              techStack={["React", "Node.js", "MongoDB", "AI/ML APIs", "Stripe"]}
              features={[
                "Supports 12+ languages",
                "GitHub OAuth integration",
                "Stripe freemium billing",
                "35% faster API response",
                "99.9% uptime achieved"
              ]}
              ghLink="https://github.com/KARTIKAY-SHUKLA1/CodeLens"
              demoLink="https://code-lens-murex.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyrify}
              isBlog={false}
              title="Hyrify"
              description="Full-Stack Job Portal with role-based dashboards for both recruiters and job seekers. Features advanced filtering system and optimized performance for seamless user experience."
              techStack={["React", "Node.js", "MongoDB", "Tailwind CSS", "Clerk"]}
              features={[
                "Role-based dashboards",
                "Advanced job filters",
                "40% improved search relevance",
                "JWT + Clerk authentication",
                "25% faster load times"
              ]}
              ghLink="https://github.com/KARTIKAY-SHUKLA1/job-portal-app"
              demoLink="https://job-portal-app-swart.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;