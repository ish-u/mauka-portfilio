import React from "react";
import logo from "../static/logo.png";
import { Row, Col, Container } from "react-bootstrap";

const NavBarBrand = () => {
  return (
    <div style={{ width: "25vw" }}>
      <Row>
        <Col sm={3}>
          <div>
            <img src={logo}></img>
          </div>
        </Col>
        <Col>
          <span className="organic">organic</span>
        </Col>
      </Row>
    </div>
  );
};

export default NavBarBrand;
