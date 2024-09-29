import {Trash } from '@phosphor-icons/react'

const WishListsCard = (props) => {
  const handleDelete = () => {
    // console.log("test")
    // console.log(props.onDelete)
    // console.log(props.id)
    props.onDelete(props._id)
  }
    return (
        <div className="product-card">
          <div className="image-container">
            <img
              src={props.image[0]}
              alt="Product"
              className="product-image"
            />
            <a href="#" className="wishlist" aria-label="View Wishlist" onClick={handleDelete}>
              <Trash size={16} /> 
            </a>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="product-info">
            <h2 className="product-name">{props.name}</h2>
            <p className="product-price">{props.price}</p>
          </div>
        </div>
    )
}

export default WishListsCard