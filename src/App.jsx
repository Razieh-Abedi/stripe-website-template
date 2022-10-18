import React, { useState } from "react";
import "./App.css";
import AppContext from "./context";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Navbar from "./Navbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});

  return (
    <AppContext.Provider
      value={[
        isSidebarOpen,
        isSubmenuOpen,
        setIsSidebarOpen,
        setIsSubmenuOpen,
        location,
        setLocation,
      ]}
    >
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppContext.Provider>
  );
}

export default App;
