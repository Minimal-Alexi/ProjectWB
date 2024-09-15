import Delivery from "./Delivery";


const deliveryData = [
  {
    type: "free",
    header: "Free Delivery",
    content: "Enter your postal code for Delivery Availability",
  },
  {
    icon: "return",
    header: "Return Delivery",
    content: "Free 30 Days Delivery Returns. Details",
  },
];

const DeliveryInfo = () => {
  return (
    <div className="delivery-container">
      {deliveryData.map((delivery, index) => (
        <Delivery {...delivery} key={index}/>
      ))}
    </div>
  );
};

export default DeliveryInfo;
