import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/john--phan/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
        <a
          target="_blank"
          href="https://github.com/johnphan96"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">
            Home
          </a>

          <a href="#">About</a>

          <a href="#">Contact</a>
        </p>

        <p>OpenD &copy; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
