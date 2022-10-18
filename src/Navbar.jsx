import React, {useContext} from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import AppContext from "./context";
import sublinks from "./data";

function Navbar() {
  const [setIsSidebarOpen, setIsSubmenuOpen, setLocation, setPage]   = useContext(AppContext);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link)=> link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
 const handleSubmenu = (e)=>{
  if (!e.target.classList.contains("link-btn")) {
    setIsSubmenuOpen(false)
  }
  
 }
  const displaySubmenu = (e) => {
   const page = e.target.textContent;
   const tempBtn = e.target.getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right)/2;
  const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
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
