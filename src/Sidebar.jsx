import React from "react";
import { FaTimes } from "react-icons/fa";
import {useGlobalContext} from './context'

function Sidebar() {
  const {isSidebarOpen}  = useGlobalContext();
  

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
     
    </aside>
  );
}

export default Sidebar;
