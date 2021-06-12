import React from "react";
import { Col } from "react-bootstrap";
import oragnicFood from "../static/organicFood.png";
import oragnicFoodBlue from "../static/organicFoodBlue.png";

const OrganicFood = ({ color }) => {
  let imgSrc = oragnicFood;
  if (color === "blue") {
    imgSrc = oragnicFoodBlue;
  }
  return (
    <Col className="organicFood">
      <img alt="organic food" src={imgSrc}></img>
    </Col>
  );
};

export default OrganicFood;
