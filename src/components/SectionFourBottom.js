import React from "react";
import { Row } from "react-bootstrap";

const SectionFourBottom = () => {
  return (
    <Row className="sectionFourChildren">
      <span>Subscribe to Our Newsletter</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="newLetterInput">
        <div>
          <input
            className="input-control"
            placeholder="Enter your Email Address"
          ></input>
        </div>
        <div>
          <button>Subscribe</button>
        </div>
      </div>
    </Row>
  );
};

export default SectionFourBottom;
