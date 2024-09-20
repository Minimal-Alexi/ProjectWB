import { Truck, ArrowUUpLeft } from "@phosphor-icons/react"

const Delivery = (props) => {
  return (
    <div className="delivery">
      {props.type === "free" ? <Truck size={32} /> : <ArrowUUpLeft size={32} />}
      <div className="delivery-content">
        <p className="delivery-header">{props.header}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Delivery;
