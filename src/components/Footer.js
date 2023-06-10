import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} lg={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/fredrik-fordelsen-6a1281203/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.github.com/btfredr" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>&copy; 2023 Fredrik Fordelsen | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
