import React from "react";

import AddLocationForm from "./AddLocationForm";
import AddProductForm from "./AddProductForm";

import "../Search/Search.css";

function Add() {
  return (
    <div className="bgBox">
      <div className="midFrame">
      <div className="container">
        <div className="outline">
          <h2>Add</h2>
          <AddLocationForm />
          <AddProductForm />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Add;
