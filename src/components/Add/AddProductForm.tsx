import React from "react";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";
import { useProductContext } from "../../context/ProductContext";

type useGeneralContext = { displayLocationForm: any, displayProductForm: any, setDisplayProductForm: any }
type useProductContext = { productBody: any, setProductBody: any, initialState: any, productsCall: any }

function AddProductForm() {
  const navigate = useNavigate();

  const { displayLocationForm, displayProductForm, setDisplayProductForm } =
    useGeneralContext() as useGeneralContext;

  const { productBody, setProductBody, initialState, productsCall } =
    useProductContext() as useProductContext;

  const showProductForm = (e: any) => {
    e.preventDefault();
    setDisplayProductForm(!displayProductForm);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newProduct = await productsCall.createProduct(productBody);

    navigate(`/search/products/results/${newProduct.product_id}`);

    setProductBody(initialState);
    setDisplayProductForm(false);
  };

  return (
    <>
      <div
        className={`form-title ${displayLocationForm && "hide-title"}`}
        onClick={showProductForm}
      >
        <h3>Products</h3>
      </div>
      <form
        className={`search-form ${displayProductForm && "active-form"}`}
        onSubmit={handleSubmit}
      >
        <section>
          <p>
            <label htmlFor="name">
              <span>Name:</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue=""
              value={productBody.name}
              onChange={(e) =>
                setProductBody({ ...productBody, name: e.target.value })
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
              defaultValue=""
              value={productBody.brand}
              onChange={(e) =>
                setProductBody({ ...productBody, brand: e.target.value })
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
              defaultValue={0}
              value={productBody.quantity}
              onChange={(e) =>
                setProductBody({ ...productBody, quantity: e.target.value })
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
              defaultValue={0}
              value={productBody.price}
              onChange={(e) =>
                setProductBody({ ...productBody, price: e.target.value })
              }
              required
            />
          </p>
        </section>
        <section>
          <p>
            <button type="submit" className="submitButton">
              Add Product
            </button>
          </p>
          <p>
            <button className="addBackButton" onClick={(e) => showProductForm(e)}>
              Go Back
            </button>
          </p>
        </section>
      </form>
    </>
  );
}

export default AddProductForm;
