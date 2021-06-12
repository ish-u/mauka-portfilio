import React from "react";
import { Col } from "react-bootstrap";

const PresentedBy = ({ logo }) => {
  return (
    <Col className="presenteByLogo">
      <img className="img-fluid" src={logo}></img>
    </Col>
  );
};

export default PresentedBy;
