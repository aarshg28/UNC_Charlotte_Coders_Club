import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Grants from "./pages/Grants";
//import News from "./pages/News";
import People from "./pages/People";
// import Publications from "./pages/publications";
import Positions from "./pages/Positions";
// import Softwares from "./pages/Softwares";
// import Links from "./pages/Links";
import Locations from "./pages/Locations";
// import Microbialites from "./pages/Microbialites";
// import Rhizosphere from "./pages/Rhizosphere";
// import Bats from "./pages/Bats";
import WhatWeDo from "./pages/WhatWeDo";
// import Human from "./pages/Human";
// import Synthetic from "./pages/Synthetic";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/grants" element={<Grants />} />
      {/* <Route path="/news" element={<News />} /> */}
      <Route path="/people" element={<People />} />
      {/* <Route path="/clubs" element={<Publications />} /> */}
      <Route path="/Positions" element={<Positions />} />
      {/* <Route path="/software" element={<Softwares />} /> */}
      {/* <Route path="/links" element={<Links />} /> */}
      <Route path="/locations" element={<Locations />} />
      {/* <Route path="/microbialites" element={<Microbialites />} /> */}
      {/* <Route path="/rhizosphere" element={<Rhizosphere />} /> */}
      {/* <Route path="/human" element={<Human />} /> */}
      {/* <Route path="/bats" element={<Bats />} /> */}
      <Route path="/whatwedo" element={<WhatWeDo />} />
      {/* <Route path="/synthetic" element={<Synthetic />} /> */}
    </Routes>
  );
}
export default App;
