import Delivery from "./Delivery";


const deliveryData = [
  {
    icon: "fa-solid fa-truck",
    header: "Free Delivery",
    content: "Enter your postal code for Delivery Availability",
  },
  {
    icon: "fa-solid fa-rotate-left",
    header: "Return Delivery",
    content: "Free 30 Days Delivery Returns. Details",
  },
];

const DeliveryInfo = () => {
  return (
    <>
      {deliveryData.map(delivery => (
        <Delivery {...delivery}/>
      ))}
    </>
  );
};

export default DeliveryInfo;
