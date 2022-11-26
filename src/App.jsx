import React from "react";
import "./App.css";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Navbar from "./Navbar";

function App() {
  return <>
    <Navbar />
    <Sidebar />
    <Submenu />
    <Hero />
    <footer className="footer">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </footer>
  </>;
}

export default App;
