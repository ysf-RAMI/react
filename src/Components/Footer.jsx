import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Container fluid={true} className="footerSection">
      <Row>
        <Col className="">
          <h4 className="footerName text-center">
            Copyright © 2025 Ecole Superieure de Technologie - Guelmim . All Rights Reserved.
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
