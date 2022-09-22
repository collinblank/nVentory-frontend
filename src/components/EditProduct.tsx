import React from "react";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../context/GeneralContext";
import { useProductContext } from "../context/ProductContext";

type useGeneralContext = { exitDetails: any, setExitDetails: any } 
type useProductContext = { productsCall: any, oneProduct: any, setOneProduct: any } 

function EditProduct() {
  const navigate = useNavigate();
  const { exitDetails, setExitDetails } = useGeneralContext() as useGeneralContext;
  const { productsCall, oneProduct, setOneProduct } = useProductContext() as useProductContext;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    await productsCall.updateProduct(oneProduct.product_id, oneProduct);

    navigate(`/search/products/results/${oneProduct.product_id}`);
  };

  return (
    <div className="bgBox">
      <div className="midFrame">
      <div className="container">
        <div className="outline">
          <div className="form-title">
            <h3>Edit Product</h3>
          </div>
          <form className="search-form active-form" onSubmit={handleSubmit}>
            <section>
              <p>
                <label htmlFor="name">
                  <span>Name:</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={oneProduct.name}
                  onChange={(e) =>
                    setOneProduct({ ...oneProduct, name: e.target.value })
                  }
                  required
                />
              </p>
              <p>
                <label htmlFor="brand">
                  <span>Brand:</span>
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  defaultValue={oneProduct.brand}
                  onChange={(e) =>
                    setOneProduct({ ...oneProduct, brand: e.target.value })
                  }
                  required
                />
              </p>
              <p>
                <label htmlFor="quantity">
                  <span>Quantity:</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  defaultValue={oneProduct.quantity}
                  onChange={(e) =>
                    setOneProduct({ ...oneProduct, quantity: e.target.value })
                  }
                  required
                />
              </p>
              <p>
                <label htmlFor="price">
                  <span>Price:</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  step=".01"
                  defaultValue={oneProduct.price}
                  onChange={(e) =>
                    setOneProduct({ ...oneProduct, price: e.target.value })
                  }
                  required
                />
              </p>
            </section>
            <section>
              <p>
                <button
                  type="submit"
                  className="submitButton"
                  onClick={() => setExitDetails(exitDetails - 1)}
                >
                  Update Product
                </button>
              </p>
              <p>
                <button className="addBackButton" onClick={() => navigate(-1)}>
                  Go Back
                </button>
              </p>
            </section>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
