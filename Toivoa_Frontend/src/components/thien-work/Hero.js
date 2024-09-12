import bannerImg from "./Loc-old-work/iphone.png";

const Hero = () => {
    return (
        <section className="hero">
        <nav className="side-navigation">
          <ul>
            <li><a href="">Women's Fashion</a></li>
            <li><a href="">Men's Fashion</a></li>
            <li><a href="">Electronics</a></li>
            <li><a href="">Home & Lifestyle</a></li>
            <li><a href="">Medicine</a></li>
            <li><a href="">Sports & Outdoor</a></li>
            <li><a href="">Babu's & Toy</a></li>
            <li><a href="">Groceries & Pets</a></li>
            <li><a href="">Health & Beauty</a></li>
          </ul>
        </nav>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </section>
    );
  };
  
  export default Hero;