import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useLocationContext } from "../context/LocationContext";

function Delete() {
  const navigate = useNavigate();
  const { productsCall, oneProduct } = useProductContext();
  const { locationsCall } = useLocationContext();

  const removeProduct = async (e, product) => {
    e.preventDefault();

    await productsCall.deleteProduct(product.product_id);
    await locationsCall.deleteLocation(product.location_id);

    navigate(-1);
  };

  return (
    <div className="bgBox">
      <div className="midFrame">
        <div className="container">
          <div className="outline">
            <h2>Are you sure you want to DELETE this product?</h2>
            <p>
              Name: <span>{oneProduct.products.name}</span>
            </p>
            <p>
              Inventory in system: <span>{oneProduct.products.quantity}</span>
            </p>
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button onClick={(e) => removeProduct(e, oneProduct)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
