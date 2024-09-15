
import NavBar from "./components/common-components/NavBar";
import Footer from "./components/common-components/Footers";
import Main from "./components/mainPage/Main.js"
import { Cart } from "./components/shoppingCartPage/Cart.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./components/shoppingCartPage/shopContext";
import ProductPage from "./components/productPage/ProductPage"
import WishLists from "./components/wishLists/WishLists"

import "./App.css";

const App = () => (
  <div className="Main">
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/wishList" element={<WishLists />}></Route>

        </Routes>
      </Router>
      <Footer />
    </ShopContextProvider>
  </div>
);

export default App;
