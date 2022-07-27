import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ItemBox.css";

function ItemBox(props) {
  const navigate = useNavigate();
  const shelf_divs = props.items;

  let [count, setCount] = useState(0);

  const displayItems = shelf_divs.map((division, index) => (
    <li key={index}>
      <div className="itemBox">
        <div className="infoButtonCover"></div>
        <button
          className="infoButton"
          onClick={() =>
            navigate(`/search/products/results/${division.product_id}`)
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"
              fill="#868686"
            />
          </svg>
        </button>
        <div className="textAreaStyling">
          <textarea
            class="scrollableTextBox"
            name="itemName"
            defaultValue={`${division.shelf_div} - ${division.products.name}`}
          ></textarea>
        </div>

        <div className="quantField">
          <div className="upperQuant">
            <button
              className="minusButton"
              onClick={() => {
                count > 0 ? setCount(count - 1) : (count = 0);
              }}
            >
              -
            </button>

            <div className="quantInputForm scroll">
              <textarea
                type="number"
                class="quantTextBox"
                value={count}
                // maxlength="4" size="4"
              />
            </div>

            <button className="plusButton" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>

          <div className="lowerQuant">
            <button className="submitQuant">submit</button>
          </div>
        </div>

        <div className="removeDiv">
          <button className="remove">remove</button>
        </div>
      </div>
    </li>
  ));

  return <div>{displayItems}</div>;
}

export default ItemBox;
