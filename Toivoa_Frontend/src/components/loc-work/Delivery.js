

const Delivery = (props) => {
  return (
    <div className="delivery">
      <i class={props.icon}></i>
      <div className="delivery-content">
        <h1>{props.header}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Delivery;
