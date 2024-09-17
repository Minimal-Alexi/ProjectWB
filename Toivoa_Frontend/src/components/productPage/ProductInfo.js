

const ProductInfo = (props) => {
  // console.log(props)
  return (
    <div className="text-info">
      <h1>{props.name}</h1>
      <p>{props.reviews}</p>
      {props.isInStock ? <p>in Stock</p> : <p>{props.isInStock ? "In stock" : "Out of Stock"}</p>}
      <p>${props.price}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default ProductInfo
