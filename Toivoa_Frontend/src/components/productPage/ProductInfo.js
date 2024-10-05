import StarDisplay from "../../hooks/reviewDisplay";
import reviewScoreAvg from "../../hooks/reviewScoreAvg";

const ProductInfo = (props) => {
  const average = reviewScoreAvg(props.reviewList);
  return (
    <div className="text-info">
      <h1>{props.name}</h1>
      <StarDisplay score={average}/>
      {props.isInStock ? <p>in Stock</p> : <p>{props.isInStock ? "In stock" : "Out of Stock"}</p>}
      <p>${props.price}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default ProductInfo
