import React from "react";

import SubBox from "./SubBox";

import "./SectionBox.css";

function SectionBox(props: any) {
    const url = new URL(window.location as any);
    const urlPath = url.pathname.slice(1);
  return (
    <div className="sectionBody">
      <div className="sectionHeader">
       <h2> {urlPath}</h2>
      </div>
      <SubBox subSections={props.subSections} />
    </div>
  );
}

export default SectionBox;
