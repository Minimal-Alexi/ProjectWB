import { Link, useNavigate } from "react-router-dom";
import main_logo from "../../images/main_logo.png";
import { useState, useEffect, useRef, useContext } from "react";
import { ProductContext } from "../../context/productContext.jsx";
import "../loginRegistryPage/login-create.css";
import { ShoppingCart, MagnifyingGlass, Heart, User } from "phosphor-react";
import { FilterContext } from "../resultPage/FilterContext.js";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { setFilteredItems } = useContext(FilterContext);
  const { products } = useContext(ProductContext);
  const {isAuthenticated, logout} = useContext(AuthContext)


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
    document.removeEventListener("mousedown", handleClickOutside);
  }, [showLogin, showCreate]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission
    const filteredItems = products.filter(
      (product) =>
        product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setQuery("");
    console.log(filteredItems); // Do something with the filtered items
    setFilteredItems(filteredItems);
    navigate("/result");
  };

  // const handleSignOut = (e) => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem("user");
  // };

  const handleSignOut = () => {
    logout(); 
    navigate("/"); 
  };

  return (
    <nav className="navbar">
      <div className="logo-search-container">
        <Link to="/" className="main">
          <img src={main_logo} alt="Toivoa Logo" />
        </Link>
        <div className="search">
          <form onSubmit={handleSubmit} aria-label="Search Form">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="search-input"
              placeholder="Search Toivoa for..."
              aria-label="Search"
            />
          </form>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              style={{ border: "none", cursor: "pointer" }}
              aria-label="Search Button"
            >
              <MagnifyingGlass size={32} />
            </button>
          </div>
        </div>
      </div>
      <div className="user-options">
        {isAuthenticated && (
          <>
            <Link to="/cart" className="cart" aria-label="View Cart">
              <ShoppingCart size={32} />
            </Link>
            <Link
              to="/wishList"
              className="wishlist"
              aria-label="View Wishlist"
            >
              <Heart size={32} />
            </Link>
            <span>{JSON.parse(localStorage.getItem("user")).username}</span>
            <Link to="/user" className="user-icon" aria-label="User">
              <User size={32} />
            </Link>
            <button onClick={handleSignOut} className="sign-out-btn">
              Sign Out
            </button>
          </>

        )}
        {!isAuthenticated && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}

        {/* <a onClick={clickEventCreate} className="sign-up-btn">
          Sign Up
        </a>
        <a onClick={clickEventLogin} className="sign-in-btn">
          Sign In
        </a>
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
        ) : null} */}
      </div>
    </nav>
  );
};

export default NavBar;
