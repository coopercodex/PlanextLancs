import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pricing } from "./routes/Pricing";
import { Home } from "./routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
