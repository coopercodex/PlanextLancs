import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pricing } from "./routes/Pricing";
import { Home } from "./routes/Home";
import { Training } from "./routes/Training";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </>
  );
}

export default App;
