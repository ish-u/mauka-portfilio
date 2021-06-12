import React from "react";
import { Container, Row } from "react-bootstrap";
import leaves from "../static/leaves.png";
import OrganicFood from "./OrganicFood";

const SectionTwo = () => {
  return (
    <Container className="p-5 sectionTwo">
      <img src={leaves}></img>
      <br></br>
      <span>Welcome to Nature</span>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <br></br>
      <br></br>
      <Row>
        <OrganicFood></OrganicFood>
        <OrganicFood color={"blue"}></OrganicFood>
        <OrganicFood></OrganicFood>
        <OrganicFood></OrganicFood>
      </Row>
    </Container>
  );
};

export default SectionTwo;
