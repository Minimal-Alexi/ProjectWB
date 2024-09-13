

const Delivery = (props) => {
  return (
    <div className="delivery">
      <i class={props.icon}></i>
      <div className="delivery-content">
        <p className="delivery-header">{props.header}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Delivery;
