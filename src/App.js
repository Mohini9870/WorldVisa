import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Canada from "./components/Navbar/Canada";
import Footer from "./components/Footer/Footer";
// import CardCanada from "./components/Card/CardCanada";
// import ImmigrationPathways from "./components/Card/ImmigrationPathways/ImmigrationPathways";
// import Contact from "./components/Contact/Contact";
// import Austraila from "./Australia/mainSection/Austraila";
import NavebarMain from "./Mainlayout/Navebar/NavebarMain";

import Home from "./Mainlayout/Layout/Home";
import Packages from "./Mainlayout/Packages/Packages";
function App() {
  return (
    <div className="App">
      <Router>
        <NavebarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          {/* <Route path="/canada" element={<Canada />} />
          <Route path="/cardcanada" element={<CardCanada />} />
          <Route
            path="/immigrationpathways"
            element={<ImmigrationPathways />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/australia" element={<Austraila />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
