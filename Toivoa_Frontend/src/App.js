
import NavBar from "./components/common-components/NavBar";
import Footer from "./components/common-components/Footers";
import Main from "./components/mainPage/Main.js";
import { Cart } from "./components/shoppingCartPage/Cart.jsx";
import UserSettingsPage from "./components/userSettings/UserSettings"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./components/shoppingCartPage/shopContext";

import "./App.css";

const App = () => (
  <div className="Main">
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<UserSettingsPage />} />
        </Routes>
      </Router>
      <Footer />
    </ShopContextProvider>
  </div>
);

export default App;
