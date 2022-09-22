import React from "react";
import { Link } from "react-router-dom";
import { useLocationContext } from "../../context/LocationContext";

import "./ScrollBar.css";

type useLocationContext = { allLocations: any }

function ScrollBar() {
  const { allLocations } = useLocationContext() as useLocationContext;
  const [sectionKeys] = allLocations;

  return (
    <div className="section-wrapper">
      {sectionKeys?.map((section: any, index: number) => (
        <Link to={`/${section}`} key={index} className="section-item">
          {section}
        </Link>
      ))}
    </div>
  );
}

export default ScrollBar;
