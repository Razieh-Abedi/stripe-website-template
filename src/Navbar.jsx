import React, {useContext} from "react";
import logo from "./images/logo.svg";
// import { faBars } from "react-icons/fa";
import AppContext from "./context";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext)
  const displaySubmenu = (e) => {
    console.log("hello world");
    openSubmenu();
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <faBars />
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
            <button className="link-btn" onMouseOver={displaySubmenu}>
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
