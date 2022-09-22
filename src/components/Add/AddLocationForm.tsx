import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";
import { useLocationContext } from "../../context/LocationContext";
import { locationsCall } from "../../api/locations";

type useLocationContext = { locationBody: any, setLocationBody: any }
type useGeneralContext = { displayLocationForm: any, setDisplayLocationForm: any, displayProductForm: any }

function AddLocationForm() {
  const { locationBody, setLocationBody } = useLocationContext() as useLocationContext;
  const { displayLocationForm, setDisplayLocationForm, displayProductForm } =
    useGeneralContext() as useGeneralContext;

  const showLocationForm = (e: any) => {
    e.preventDefault();
    setDisplayLocationForm(!displayLocationForm);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    locationsCall.createLocation(locationBody);
  };

  return (
    <>
      <div
        className={`form-title ${displayProductForm && "hide-title"}`}
        onClick={showLocationForm}
      >
        <h3>Locations</h3>
      </div>
      <form
        className={`search-form ${displayLocationForm && "active-form"}`}
        onSubmit={handleSubmit}
      >
        <section>
          <p>
            <label htmlFor="section">
              <span>Section:</span>
            </label>
            <input
              type="text"
              id="section"
              name="sections"
              value={locationBody.sections}
              onChange={(e) =>
                setLocationBody({
                  ...locationBody,
                  sections: e.target.value,
                })
              }
              required
            />
          </p>
          <p>
            <label htmlFor="shelf">
              <span>Shelf:</span>
            </label>
            <input
              type="text"
              id="shelf"
              name="shelf_letter"
              value={locationBody.shelf_letter}
              onChange={(e) =>
                setLocationBody({
                  ...locationBody,
                  shelf_letter: e.target.value,
                })
              }
              required
            />
          </p>
          <p>
            <label htmlFor="division">
              <span>Division:</span>
            </label>
            <input
              type="number"
              id="division"
              name="shelf_div"
              value={locationBody.shelf_div}
              onChange={(e) =>
                setLocationBody({
                  ...locationBody,
                  shelf_div: e.target.value,
                })
              }
              required
            />
          </p>
        </section>
        <section>
          <p>
            <button type="submit" className="submitButton">
              Add Locations
            </button>
          </p>
          <p>
            <button className="addBackButton" onClick={(e) => showLocationForm(e)}>
              Go Back
            </button>
          </p>
        </section>
      </form>
    </>
  );
}

export default AddLocationForm;
