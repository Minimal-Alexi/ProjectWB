import Hero from "./Hero";
import TrendingDiscover from "./TrendingDiscovery";
import ProductCard from "../common-components/ProductCard";
import ViewAllButton from "../common-components/ViewAll";


const Main = () => (
  <div className="Main">
    <Hero />
    <TrendingDiscover />
    <ProductCard />
    <ViewAllButton />
  </div>
);

export default Main;
