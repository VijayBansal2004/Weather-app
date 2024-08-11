import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Content } from "./components/content";
function App() {
  return (
    <>
      <div style={{ minHeight: "100%" }}>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
