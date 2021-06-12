import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import leaves from "../static/leaves.png";
import BlogPost from "./BlogPost";

const SectionFive = () => {
  return (
    <Container className="p-5 sectionFive">
      <Row>
        <img src={leaves}></img>
      </Row>
      <Row>
        <span>Read Our Blog</span>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Row>
      <Container className="p-5 justify-content-center">
        <Row>
          <Col>
            <BlogPost
              title={"Blog Post One"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              }
            ></BlogPost>
          </Col>
          <Col>
            <BlogPost
              title={"Blog Post One"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              }
            ></BlogPost>
          </Col>
          <Col>
            <BlogPost
              title={"Blog Post One"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              }
            ></BlogPost>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SectionFive;
