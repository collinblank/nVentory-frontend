import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";
import { useProductContext } from "../../context/ProductContext";

import "./Products.css";

type useGeneralContext = { exitDetails: any, setExitDetails: any }
type useProductContext = { productsCall: any, oneProduct: any, setOneProduct: any }

function ProductDetails() {
  const navigate = useNavigate();
  const { exitDetails, setExitDetails } = useGeneralContext() as useGeneralContext;
  const { productsCall, oneProduct, setOneProduct } = useProductContext() as useProductContext;
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productsCall.getOneProduct(product_id);
      setOneProduct(data);
    };

    setTimeout(fetchProduct, 250);
  }, []);

  const resetOnLeave = () => {
    navigate(exitDetails);
    setOneProduct({});
    setExitDetails(-1);
  };

  return (
    <div className="bgBox">
      <div className="midFrame">
        <button onClick={resetOnLeave} className="backButton">
          ⬅
        </button>
        <div className="container">
          <div className="outline">
            {!oneProduct.name ? (
              <h2>...Loading</h2>
            ) : (
              <p>
                Name: {oneProduct.name}
                <br />
                Brand: {oneProduct.brand}
                <br />
                Quantity: {oneProduct.quantity}
                <br />
                Price: {oneProduct.price}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/search/products/results/${oneProduct.product_id}/edit`);
            setExitDetails(exitDetails - 1);
          }}
        className="infoEditButton">
        <div className="verticle">Edit</div> 
        </button>
      </div>
      
    </div>
  );
}

export default ProductDetails;
