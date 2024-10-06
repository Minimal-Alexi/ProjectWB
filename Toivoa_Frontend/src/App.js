import React from "react";
import { Cart } from "./components/shoppingCartPage/Cart.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/common-components/NavBar";
import Footer from "./components/common-components/Footers";
import Main from "./components/mainPage/Main.js";
import UserSettingsPage from "./components/userSettings/UserSettings";
import ProductPage from "./components/productPage/ProductPage";
import WishLists from "./components/wishLists/WishLists";
import ErrorPage from "./components/notfound-page/ErrorPage";
import CheckOut from "./components/checkOutPage/CheckOut";
import ResultPage from "./components/resultPage/resultPage.jsx";
import Login from "./components/loginRegistryPage/Login.js";
import Create from "./components/loginRegistryPage/Create.js";

// Context Provider
import { ShopContextProvider } from "./context/shopContext.jsx";
import { FilterProvider } from "./components/resultPage/FilterContext.js";
import { WishListProvider } from "./context/WishListContext";
import { ProductProvider } from "./context/productContext.jsx";
import { AuthProvider } from "./context/authContext"; // Import AuthProvider
import "./App.css";

const App = () => {
  return (
    <AuthProvider> {/* Ensure AuthProvider wraps the entire app */}
      <ProductProvider>
        <FilterProvider>
          <WishListProvider>
            <ShopContextProvider>
              <Router>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishList" element={<WishLists />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/user" element={<UserSettingsPage />} />
                  <Route path="/signup" element={<Create />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/result" element={<ResultPage />} />
                  <Route path="/checkout" element={<CheckOut />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </Router>
              <Footer />
            </ShopContextProvider>
          </WishListProvider>
        </FilterProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
