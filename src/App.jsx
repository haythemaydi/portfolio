import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Nav from "./Page/Nav";

const App = () => {
  return (
    <Router>
      <main className="container">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
