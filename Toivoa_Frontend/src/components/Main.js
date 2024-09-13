import Hero from "./Hero";
import NavBar from "./NavBar";
import TrendingDiscover from "./TrendingDiscovery";
import ProductCard from "./ProductCard"
import ViewAllButton from "./ViewAll";
import Footer from "./Footers";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import './style.css';

const Main = () => (
    <div>
      <NavBar />
      <Hero/>
      <TrendingDiscover/>
      <ProductCard/>
      <ViewAllButton/>
      <Footer/>
    </div>
  );

export default Main