import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pricing } from "./routes/Pricing";
import { Home } from "./routes/Home";
import { Training } from "./routes/Training";
import { Contact } from "./routes/Contact";
import { Rover } from "./routes/Rover";
import { Gallery } from "./routes/Gallery";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rover" element={<Rover />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
