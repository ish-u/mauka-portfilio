import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerBG from "../static/footerBG.png";
import footerLogo from "../static/footerLogo.png";
import fbLogo from "../static/fbLogo.png";
import instagramLogo from "../static/instagramLogo.png";
import linkedinLogo from "../static/linkedinLogo.png";

const Info = () => {
  return (
    <div className="info p-3">
      <div>
        <img alt="oragnic" src={footerLogo}></img>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <div>
        <hr className="blueBar"></hr>© Copyright 2020 Nature
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className="linksFooter p-3">
      <div>
        <span>Information</span>
      </div>
      <hr className="blueBar"></hr>
      <Container>
        <Row>
          <Col>About Us</Col>
          <Col>Products</Col>
        </Row>
        <Row>
          <Col>Contact Us</Col>
          <Col>Term Of Services</Col>
        </Row>
        <Row>
          <Col>About</Col>
        </Row>
      </Container>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <Container className="socialLink">
      <Row>
        <Col>
          <span>Follow Us</span>
        </Col>
      </Row>
      <hr className="blueBar"></hr>
      <Row>
        <Col>
          <img alt="facebook" src={fbLogo}></img>
        </Col>
        <Col>
          <img alt="instagram" src={instagramLogo}></img>
        </Col>
        <Col>
          <img alt="linkedin" src={linkedinLogo}></img>
        </Col>
      </Row>
    </Container>
  );
};

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${footerBG})`,
        height: "450px",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Container className="footer p-5">
        <Row>
          <Col>
            <Info></Info>
          </Col>
          <Col>
            <Links></Links>
          </Col>
          <Col>
            <SocialLinks></SocialLinks>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
