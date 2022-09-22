import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";
import { useLocationContext } from "../../context/LocationContext";

type useGeneralContext = { displayLocationForm: any, setDisplayLocationForm: any, displayProductForm: any }

type useLocationContext = { locationBody: any, setLocationBody: any }

function SearchLocationForm() {
  const { displayLocationForm, setDisplayLocationForm, displayProductForm } =
    useGeneralContext() as useGeneralContext;

  const { locationBody, setLocationBody } = useLocationContext() as useLocationContext;

  const showLocationForm = (e: any) => {
    e.preventDefault();
    setDisplayLocationForm(!displayLocationForm);
  };

  return (
    <>
      <div
        className={`form-title ${displayProductForm && "hide-title"}`}
        onClick={showLocationForm}
      >
        <h3>Locations</h3>
      </div>
      <form className={`search-form ${displayLocationForm && "active-form"}`}>
        <section>
          <p>
            <label htmlFor="section">
              <span>Section:</span>
            </label>
            <select id="section" name="sections">
              <option defaultValue="">All</option>
              <option value="freezer">Freezer</option>
              <option value="alcohol">Alcohol</option>
              <option value="dairy">Dairy</option>
            </select>
          </p>
          <p>
            <label htmlFor="shelf">
              <span>Shelf:</span>
            </label>
            <select id="shelf" name="shelf_letter">
              <option defaultValue="">All</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </p>
          <p>
            <label htmlFor="division">
              <span>Division:</span>
            </label>
            <select id="division" name="shelf_div">
              <option defaultValue="">All</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
            </select>
          </p>
        </section>
        <section>
          <p>
            <button type="submit" className="submitButton">
              Search Locations
            </button>
          </p>
          <p>
            <button onClick={(e) => showLocationForm(e)} className="addBackButton">
              Go Back
            </button>
          </p>
        </section>
      </form>
    </>
  );
}

export default SearchLocationForm;
