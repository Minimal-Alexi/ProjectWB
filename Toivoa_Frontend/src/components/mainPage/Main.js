import Hero from "./Hero";
import TrendingDiscover from "./TrendingDiscovery";
import ProductCard from "../common-components/ProductCard";
import ViewAllButton from "../common-components/ViewAll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "../shoppingCartPage/shopContext";

//import './style.css';

const Main = () => (
  <div className="Main">
    <Hero />
    <TrendingDiscover />
    <ProductCard />
    <ViewAllButton />
  </div>
);

export default Main;
