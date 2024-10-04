import { Cart } from "./components/shoppingCartPage/Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common-components/NavBar";
import Footer from "./components/common-components/Footers";
import Main from "./components/mainPage/Main.js";
import UserSettingsPage from "./components/userSettings/UserSettings";
import ProductPage from "./components/productPage/ProductPage";
import WishLists from "./components/wishLists/WishLists";
import ErrorPage from "./components/notfound-page/ErrorPage";
import CheckOut from "./components/checkOutPage/CheckOut";
import ResultPage from "./components/resultPage/resultPage.jsx";
// Context Provider
import { ShopContextProvider } from "./context/shopContext.jsx";
import { FilterProvider } from "./components/resultPage/FilterContext.js";
import { WishListProvider } from "./context/WishListContext";
import { ProductProvider } from "./context/productContext.jsx";
import { AuthProvider } from "./context/authContext";
import "./App.css";

const App = () => (
  <div className="Main">
    <AuthProvider>
      <ProductProvider>
        <FilterProvider>
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
  </div>
);

export default App;
