import main_logo from "../../images/main_logo.png";
import { useState, useEffect, useRef } from 'react';
import Create from '../loginRegistryPage/Create';
import Login from '../loginRegistryPage/Login';
import '../loginRegistryPage/login-create.css';

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const popupRef = useRef(null);

  const clickEventLogin = () => {
    setShowLogin(true);
    setShowCreate(false);
  };

  const clickEventCreate = () => {
    setShowLogin(false);
    setShowCreate(true);
  };

  const closeEvent = () => {
    setShowLogin(false);
    setShowCreate(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closeEvent();
    }
  };

  useEffect(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  }, [showLogin, showCreate]);

  return (
    <nav className="navbar">
      <div className="logo-search-container">
        <img src={main_logo} alt="Toivoa Logo" />
        <div className="search">
          <form action="#" method="get" aria-label="Search Form">
            <input
              type="text"
              className="search-input"
              placeholder="Search Toivoa for..."
              aria-label="Search"
            />
          </form>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="user-options">
        <a href="#" className="cart" aria-label="View Cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="#" className="wishlist" aria-label="View Wishlist">
          <i className="fa-regular fa-heart"></i>
        </a>
        <a href="#" className="user-icon" aria-label="User">
          <i className="fa-regular fa-user"></i>
        </a>
        <a onClick={clickEventCreate} className="sign-up-btn">Sign Up</a>
        <a onClick={clickEventLogin} className="sign-in-btn">Sign In</a>
      </div>
      <div className="login-create">
        {showLogin ? (
          <div ref={popupRef} className="popup-container">
            <Login switchToCreate={clickEventCreate} closeEvent={closeEvent} />
          </div>
        ) : null}
        {showCreate ? (
          <div ref={popupRef} className="popup-container">
            <Create switchToLogin={clickEventLogin} closeEvent={closeEvent} />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;