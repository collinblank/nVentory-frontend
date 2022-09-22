import React from "react";
import LocationProvider from "./LocationContext";
import ProductProvider from "./ProductContext";
import GeneralContextProvider from "./GeneralContext";

function GlobalProvider({ children }) {
  return (
    <GeneralContextProvider>
      <ProductProvider>
        <LocationProvider>{children}</LocationProvider>
      </ProductProvider>
    </GeneralContextProvider>
  );
}

export default GlobalProvider;
