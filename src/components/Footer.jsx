import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-content">
          <Col size={12} sm={6} className="footer-left">
            <div className="footer-brand">
              <h3 className="footer-name">Shahnawaz Khan</h3>
              <p className="footer-title">Full Stack Developer | Data Analyst</p>
              <p className="footer-description">
                Building innovative web solutions with passion and precision
              </p>
            </div>
          </Col>
          <Col size={12} sm={6} className="footer-right text-center text-sm-end">
            <div className="social-icons-footer">
              <a 
                href="https://linkedin.com/in/shahnawaz-khann/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link linkedin"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
                <span className="icon-label">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/shahnawaz-khann/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link github"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span className="icon-label">GitHub</span>
              </a>
              <a 
                href="mailto:contact.shahnawazX@gmail.com"
                className="social-icon-link email"
                aria-label="Send Email"
              >
                <FaEnvelope />
                <span className="icon-label">Email</span>
              </a>
            </div>
            <div className="footer-copyright">
              <p>
                Made with <FaHeart className="heart-icon" /> by Shahnawaz Khan
              </p>
              <p className="copyright-text">
                Copyright © 2026. All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}