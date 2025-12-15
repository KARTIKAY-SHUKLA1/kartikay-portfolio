import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Kartikay Shukla</span> from{" "}
            <span className="purple">Kanpur, India</span>, currently pursuing my{" "}
            <span className="purple">B.Tech in Electronics and Communication Engineering</span> at{" "}
            <span className="purple">IIIT Kota</span>.
            <br />
            <br />
            I enjoy working on problems that require <span className="purple">logical thinking and attention to detail</span>. Coding, for me, is about understanding how things work internally and building solutions that are simple, structured, and reliable. I'm especially interested in{" "}
            <span className="purple">software development</span>, where problem solving and system thinking come together.
            <br />
            <br />
            I like <span className="purple">learning by doing</span>—experimenting with ideas, improving my approach through practice, and continuously refining how I write and think about code. Over time, this process has helped me become more comfortable with{" "}
            <span className="purple">debugging, optimization, and breaking down complex problems</span>.
            <br />
            <br />
            Outside of focused development work, a few things I genuinely enjoy are:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving DSA & Logical Problems 🧩
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning from Open Source 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(136, 146, 176)" }}>
            "Consistency beats intensity."
          </p>
          <footer className="blockquote-footer">Kartikay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;