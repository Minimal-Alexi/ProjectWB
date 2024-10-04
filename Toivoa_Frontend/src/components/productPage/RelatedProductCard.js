import {Heart } from '@phosphor-icons/react'

const RelatedProductCard = (props) => {
    return (
        <div className="product-card">
          <div className="image-container">
            <img
              src={props.image[0]}
              alt="Product"
              className="product-image"
            />
            <a href="/wishlist" className="wishlist" aria-label="View Wishlist">
              <Heart size={16} /> 
            </a>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="product-info">
            <h2 className="product-name">{props.name}</h2>
            <p className="product-price">{props.price} $</p>
            <p className="product-reviews">{props.reviews}</p>
          </div>
        </div>
    )
}

export default RelatedProductCard