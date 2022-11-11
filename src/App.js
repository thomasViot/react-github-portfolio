import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Project from "./routes/Projects"
import Contact from "./routes/Contact"
import Studies from "./routes/Studies"
import Submitted from "./routes/Submitted";

import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/react-github-portfolio" element={<Home />}/>
        <Route path="/react-github-portfolio/Projects" element={<Project />}/>
        <Route path="/react-github-portfolio/Studies" element={<Studies />}/>
        <Route path="/react-github-portfolio/Contact" element={<Contact />} />
        <Route path="/react-github-portfolio/Submitted" element={<Submitted />} />
      </Routes>

      
    </>
  );
}

export default App;
