import { Link } from "react-router-dom";
import main_logo from "../../images/main_logo.png";
import { useState, useRef, useEffect } from "react";
import Create from "../loginRegistryPage/Create";
import Login from "../loginRegistryPage/Login";
import "../loginRegistryPage/login-create.css";
import { ShoppingCart, MagnifyingGlass, Heart, User } from "phosphor-react";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const ref = useRef(null);

  const showL = () => {
    setShowLogin(true);
    setShowCreate(false);
  };

  const showC = () => {
    setShowLogin(false);
    setShowCreate(true);
  };

  const clickEventLogin = () => {
    showL();
  };

  const clickEventCreate = () => {
    showC();
  };

  const closeLoginAndCreate = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowLogin(false);
      setShowCreate(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeLoginAndCreate);
    return () => document.removeEventListener("mousedown", closeLoginAndCreate);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-search-container">
        <Link to="/" className="main" aria-label="Main Page">
          <img src={main_logo} alt="Toivoa Logo" />
        </Link>
        <div className="search">
          <form action="#" method="get" aria-label="Search Form">
            <input
              type="text"
              className="search-input"
              placeholder="Search Toivoa for..."
              aria-label="Search"
            />
          </form>
          <MagnifyingGlass size={32} />
        </div>
      </div>
      <div className="user-options">
        <Link to="/cart" className="cart" aria-label="View Cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/" className="wishlist" aria-label="View Wishlist">
          <Heart size={32} />
        </Link>
        <Link to="/" className="user-icon" aria-label="User">
          <User size={32} />
        </Link>
        <a onClick={clickEventCreate} className="sign-up-btn">
          Sign Up
        </a>
        <a onClick={clickEventLogin} className="sign-in-btn">
          Sign In
        </a>
        <div ref={ref} className="login-create">
          {showLogin ? (
            <div className="popup-container">
              <Login switchToCreate={showC} />
            </div>
          ) : null}
          {showCreate ? (
            <div className="popup-container">
              <Create switchToLogin={showL} />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
