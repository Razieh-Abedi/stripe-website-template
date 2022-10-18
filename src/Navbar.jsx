import React, {useContext} from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import AppContext from "./context";

function Navbar() {
  const [setIsSidebarOpen, setIsSubmenuOpen, setLocation]   = useContext(AppContext);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
 
  const displaySubmenu = (e) => {
   const page = e.target.textContent;
   const tempBtn = e.target.getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right)/2;
  const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={displaySubmenu}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={openSubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
