import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import useField from "../../hooks/useField";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  const nameInput = useField("text");
  const companyInput = useField("text");
  const streetAddressInput = useField("text");
  const apartmentInput = useField("text");
  const cityInput = useField("text");
  const phoneNumber = useField("tel");
  const emailInput = useField("email");

  const { cartItems, products } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate("/order-success");
    }, 1000);
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  const cartProducts = products.filter(product => cartItems[product._id] !== 0);

  // Calculate total price 
  let totalPrice = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    totalPrice += cartProducts[i].price;
  }

  return (
    <div className="check-out-container">
      <div className="category-path">
        <p> Account / My Account / Product / View Cart / CheckOut</p>
      </div>
      <div className="billing-header">
        <h3>Billing Details</h3>
      </div>
      <div className="billing-info-container">
        <div className="billing-shipping-information">
          <form onSubmit={handleSubmit}>
            <div className="user-info">
              <div className="info">
                <label>First Name</label>
                <input {...nameInput} />
              </div>
              <div className="info">
                <label>Company Name</label>
                <input {...companyInput} />
              </div>
              <div className="info">
                <label>Street Address</label>
                <input {...streetAddressInput} />
              </div>
              <div className="info">
                <label>Apartment, floor, etc.(optional)</label>
                <input {...apartmentInput} />
              </div>
              <div className="info">
                <label>Town/City</label>
                <input {...cityInput} />
              </div>
              <div className="info">
                <label>Phone Number</label>
                <input {...phoneNumber} />
              </div>
              <div className="info">
                <label>Email Address</label>
                <input {...emailInput} />
              </div>
              <div className="save-information">
                <input type="checkbox" name="save" />
                <label>
                  Save this information for faster check-out next time
                </label>
              </div>
              <button type="submit" className="place-order-button">Place order</button>
            </div>
          </form>
        </div>
        <div className="billing-product-information">
          {cartProducts.map((product, index) => (
            <div className="billing-info" key={index}>
              <div className="product-pic-name">
                <img src={product.image[0]} alt="product-image" />
                <p>{product.name}</p>
              </div>
              <p>${product.price}</p>
            </div>
          ))}
          <div className="billing-info">
            <p>Subtotal:</p>
            <p>${totalPrice}</p>
          </div>
          <hr></hr>
          <div className="billing-info">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr></hr>
          <div className="billing-info">
            <p>Total:</p>
            <p>${totalPrice}</p>
          </div>
          <div className="payment-options">
            <input type="radio" value="Bank" name="payment" />
            <label>Bank</label>
          </div>
          <div className="payment-options">
            <input type="radio" value="Cash" name="payment" />
            <label>Cash on delivery</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;