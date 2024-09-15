import { productData } from "./productData";



const ProductInfo = () => {
  return (
    <div className="text-info">
      <h1>{productData.name}</h1>
      <p>{productData.reviews}</p>
      {productData.isInStock ? <p>in Stock</p> : <p>{productData.isInStock ? "In stock" : "Out of Stock"}</p>}
      <p>${productData.price}</p>
      <p>{productData.description}</p>
    </div>
  );
};

export default ProductInfo
