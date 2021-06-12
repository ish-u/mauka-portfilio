import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import NavBarBrand from "./NavBarBrand";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <Container className="p-5">
      <Row className="navBar">
        <NavBarBrand></NavBarBrand>
        <div className="links">
          <NavButton name={"Home"}></NavButton>
          <NavButton name={"Produts"}></NavButton>
          <NavButton name={"Blogs"}></NavButton>
          <NavButton name={"About Us"}></NavButton>
          <NavButton
            name={"Contact"}
            style={{ border: "solid 2px black" }}
          ></NavButton>
        </div>
      </Row>
    </Container>
  );
};

export default NavBar;
