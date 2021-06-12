import React from "react";
import { Container, Row } from "react-bootstrap";
import PresentedBy from "./PresentedBy";
import presentedOne from "../static/presentedByLogo_1.png";
import presentedTwo from "../static/presentedByLogo_2.png";
import presentedThree from "../static/presentedByLogo_3.png";

const SectionThree = () => {
  return (
    <Container className="p-5 sectionThree">
      <span>Proudly presented by</span>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <br></br>
      <br></br>
      <Row>
        <PresentedBy logo={presentedOne}></PresentedBy>
        <PresentedBy logo={presentedThree}></PresentedBy>
        <PresentedBy logo={presentedTwo}></PresentedBy>
        <PresentedBy logo={presentedThree}></PresentedBy>
        <PresentedBy logo={presentedOne}></PresentedBy>
      </Row>
      <br></br>
    </Container>
  );
};

export default SectionThree;
