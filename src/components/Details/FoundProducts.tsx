import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

import '../Show.css'

type useProductContext = { foundProducts: any }

function FoundProducts() {
  const navigate = useNavigate();
  const { foundProducts } = useProductContext() as useProductContext;

  return (
    <div className="showBgBox">
      <button onClick={() => navigate(-1)} className="showBackButton">⬅</button>
      <div className="showContainer">
        <div className="outline">
          <h3>Found Products</h3>
          <ul>
            {foundProducts.length ? (
              foundProducts.map((product: any, index: any) => (
                <li key={index} className="itemLink">
                  <div className="checkmark">✓</div>
                  <Link to={`/search/products/results/${product.product_id}`}>
                   {product.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FoundProducts;
