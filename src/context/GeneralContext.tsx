import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export function useGeneralContext() {
  return useContext(GeneralContext);
}

export default function GeneralContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const [showScrollbar, setShowScrollBar] = useState(false);
  const [displayLocationForm, setDisplayLocationForm] = useState(false);
  const [displayProductForm, setDisplayProductForm] = useState(false);
  const [exitDetails, setExitDetails] = useState(-1);

  return (
    <GeneralContext.Provider
      value={{
        sidebar: sidebar,
        setSidebar,
        showScrollbar: showScrollbar,
        setShowScrollBar,
        displayLocationForm: displayLocationForm,
        setDisplayLocationForm,
        displayProductForm: displayProductForm,
        setDisplayProductForm,
        exitDetails: exitDetails,
        setExitDetails,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
