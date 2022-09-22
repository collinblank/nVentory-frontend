import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocationContext } from "./context/LocationContext";
import { SidebarData } from "./components/Navbar/SidebarData";

import Header from "./components/Header";
import ScrollBar from "./components/ScrollBar/ScrollBar";
import SectionBox from "./components/SectionBox";
import FoundProducts from "./components/Details/FoundProducts";
import ProductDetails from "./components/Details/ProductDetails";
import EditProduct from "./components/EditProduct";
import Delete from "./components/Delete";

import "./App.css";

type useLocationContext = { allLocations: any }

function App() {
  const { allLocations } = useLocationContext() as useLocationContext;
  const [sectionKeys, sectionsObj] = allLocations;

  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
          <ScrollBar />
        </div>
        <Routes>
          {SidebarData?.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.component ?? route.component}
            />
          ))}
          {sectionKeys?.map((section: any, index: any) => (
            <Route
              key={index}
              path={`/${section}`}
              element={<SectionBox subSections={sectionsObj[section]} />}
            />
          ))}
          <Route
            path="/search/products/results"
            element={<FoundProducts />}
          />
          <Route
            path="/search/products/results/:product_id"
            element={<ProductDetails />}
          />
          <Route
            path="/search/products/results/:product_id/edit"
            element={<EditProduct />}
          />
          <Route path="/action/:product_id" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
