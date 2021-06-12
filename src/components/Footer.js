import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerBG from "../static/footerBG.png";
import logo from "../static/logo.png";

const Info = () => {
  return (
    <Container className="p-5 info">
      <img src={logo} style={{ color: "white" }}></img>
      <span>organic</span>
    </Container>
  );
};

const Footer = () => {
  return (
    <Container fluid style={{ background: `url(${footerBG})` }}>
      <Container className="footer p-5 ">
        <Row>
          <Col>
            <Info></Info>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
