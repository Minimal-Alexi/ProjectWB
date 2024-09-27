import NavBar from "./components/common-components/NavBar";
import Footer from "./components/common-components/Footers";
import Main from "./components/mainPage/Main.js";
import { Cart } from "./components/shoppingCartPage/Cart.jsx";
import UserSettingsPage from "./components/userSettings/UserSettings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shopContext.jsx";
import ProductPage from "./components/productPage/ProductPage";
import WishLists from "./components/wishLists/WishLists";
import ErrorPage from "./components/notfound-page/ErrorPage";
import { WishListProvider } from "./context/WishListContext";
import { ProductProvider } from "./context/productContext.jsx";
import "./App.css";

const App = () => (
  <div className="Main">
    <ProductProvider>
      <WishListProvider>
        <ShopContextProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishList" element={<WishLists />}></Route>
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/user" element={<UserSettingsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
          <Footer />
        </ShopContextProvider>
      </WishListProvider>
    </ProductProvider>
  </div>
);

export default App;
