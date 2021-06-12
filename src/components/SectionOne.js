import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import flower from "../static/flower.png";
import logo from "../static/logo_overlay.png";

const SectionOne = () => {
  return (
    <Container className="p-5 sectionOne">
      <Row>
        <Col>
          <h3>Healthy life with</h3>
          <h1>Nature Organic</h1>
          <p>
            Vegetables are the edible parts of a plant that is used in cooking
            or can be eaten now.
          </p>
          <br></br>
          <Button className="exploreButton">Explore Now</Button>
        </Col>
        <Col>
          <div style={{ position: "absolute" }}>
            <img
              alt="flower"
              class="img-fluid"
              style={{
                position: "relative",
                top: "0",
                zIndex: "1",
              }}
              src={flower}
            ></img>
            <img
              alt="logo"
              style={{
                width: "350px",
                height: "340px",
                position: "absolute",
                left: "250px",
                border: "solid 3px #00dbd0",
                padding: "12.5%",
              }}
              src={logo}
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
