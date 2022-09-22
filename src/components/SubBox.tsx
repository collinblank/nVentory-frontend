import React from "react";
import Collapsible from "react-collapsible";
import { orderByShelf } from "../helpers/locations";
import { map } from "rxjs/operators"; 

import ItemBox from "./ItemBox";

import "./SubBox.css";

function SubBox(props: any) {
  const [shelfKeys, shelfs] = orderByShelf(props.subSections);

  const displaySubSections = shelfKeys.map((shelfKey: any, index: any) => (
    <li key={index}>
      <div className="line"></div>
      <Collapsible
        open
        trigger={
          <button type="button" className="collapsibleButton">
            Shelf {shelfKey} ------------
          </button>
        }
        className=""
      >
        <div className="content">
          <ul>
            <ItemBox items={shelfs[shelfKey]} />
          </ul>
        </div>
      </Collapsible>
    </li>
  ));

  return <div className="subBox">{displaySubSections}</div>;
}

export default SubBox;
