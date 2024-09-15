import Hero from "./Hero";
import TrendingDiscover from "./TrendingDiscovery";
import ProductContainer from "../common-components/ProductContainer";
import ViewAllButton from "../common-components/ViewAll";


const Main = () => (
  <div className="Main">
    <Hero />
    <TrendingDiscover />
    <ProductContainer />
    <ViewAllButton />
  </div>
);

export default Main;
