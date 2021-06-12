import React from "react";
import { useState } from "react";
const NavButton = ({ name }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="buttonNav"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {name} {hover && <hr className="blueBar"></hr>}
    </div>
  );
};

export default NavButton;
