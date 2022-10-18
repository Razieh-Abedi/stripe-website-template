import React, { useContext, useState, useEffect, useRef } from "react";

import AppContext from "./context";

function Submenu() {
  const [isSubmenuOpen, location] = useContext(AppContext);
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      Submenu
    </aside>
  );
}

export default Submenu;
