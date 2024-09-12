import Hero from "./Hero";
import NavBar from "./NavBar";
import TrendingDiscover from "./TrendingDiscovery";
import ProducCard from "./ProductCard"
import ViewAllButton from "./ViewAll";
import Footer from "./Footers";
import './style.css';

const Main = () => (
    <div>
      <NavBar />
      <Hero/>
      <TrendingDiscover/>
      <ProducCard/>
      <ViewAllButton/>
      <Footer/>
    </div>
  );

export default Main