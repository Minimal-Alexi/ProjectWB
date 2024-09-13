
const ProductCard = (props) => {
    return (
        <div className="product-card">
          <div className="image-container">
            <img
              src={props.image}
              alt="Product Image"
              className="product-image"
            />
            <a href="#" className="wishlist" aria-label="View Wishlist">
              <i className="fa-regular fa-heart"></i>
            </a>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="product-info">
            <h2 className="product-name">{props.name}</h2>
            <p className="product-price">{props.price}</p>
            <p className="product-reviews">{props.reviews}</p>
          </div>
        </div>
    )
}

export default ProductCard