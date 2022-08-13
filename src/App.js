import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layouts";
import { Error, Home } from "./routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
