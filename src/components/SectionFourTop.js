import React from "react";
import { Row } from "react-bootstrap";
import comma from "../static/Comma.png";
import woman from "../static/woman.png";

const SectionFourTop = () => {
  return (
    <Row className="sectionFourChildren">
      <div>
        <img
          alt="comma"
          style={{ width: "60px", height: "50px" }}
          src={comma}
        ></img>
      </div>
      <br></br>
      <div>
        <img
          alt="woman "
          style={{
            width: "97.6px",
            height: "97.6px",
            border: "soild white 1px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={woman}
        ></img>
      </div>
      <br></br>
      <div>
        <span>John Doe</span>
      </div>
      <br></br>
      <br></br>
      <p>
        Thank you for all the amazing produce and products you deliver each
        week… you make my life so easy an bring goodness into our family eating.
        I’ve been roasting a lot of brussel sprouts and
      </p>
    </Row>
  );
};

export default SectionFourTop;
