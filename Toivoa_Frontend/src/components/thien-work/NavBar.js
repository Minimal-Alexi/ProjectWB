import main_logo from "./Loc-old-work/main_logo.png";

const NavBar = () => {
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
          <a href="#" className="sign-up-btn">Sign Up</a>
          <a href="#" className="sign-in-btn">Sign In</a>
        </div>
      </nav>
  );
};

export default NavBar;