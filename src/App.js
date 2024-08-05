import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Homeview from "./views/HomeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
