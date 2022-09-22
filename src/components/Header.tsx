import React from "react";

import Navbar from "./Navbar/Navbar";
import SaveButton from "./SaveButton";

import Logo from "./Logo";

function Header() {
  const headerStyle = {
    flexGrow: "1",
    display: "flex",
    flexflow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em 1em",
    marginTop: "5px",
    marginBottom: "5px",
  };

  return (
    <div style={headerStyle}>
      <Navbar />
      <Logo />
      <SaveButton />
    </div>
  );
}

export default Header;
