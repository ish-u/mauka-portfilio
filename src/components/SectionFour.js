import React from "react";
import { Container, Row } from "react-bootstrap";
import sideLeaf from "../static/sideLeaf.png";
import SectionFourTop from "./SectionFourTop";
import SectionFourBottom from "./SectionFourBottom";
const SectionFour = () => {
  return (
    <Container className="p-5 sectionFour">
      <SectionFourTop></SectionFourTop>
      <SectionFourBottom></SectionFourBottom>
      <img
        src={sideLeaf}
        style={{
          position: "absolute",
          left: "-75%",
          top: "-25%",
          height: "1293px",
        }}
      ></img>
    </Container>
  );
};

export default SectionFour;
