import ps5_main from "../../images/ps5_controller_main.png";
import ps5_1 from "../../images/ps5_controller1.png";
import ps5_2 from "../../images/ps5_controller2.jpg";
import ps5_3 from "../../images/ps5_controller3.png";


export const productData = {
  id: 1,
  name: "Cool Sneakers",
  reviews: 80,
  price: 79.99,
  description: "High-quality sneakers perfect for running and casual wear.",
  images: [ps5_main, ps5_1, ps5_2, ps5_3],
  sizes: ["S", "M", "L", "XL"],
  isInStock: true,
  colors: [
    { name: "Red", hex: "#ff0000" },
    { name: "Green", hex: "#00ff00" },
    { name: "Blue", hex: "#0000ff" },
    { name: "Yellow", hex: "#ffff00" },
  ],
};

export const products = [
  {
    name: "Product Name 1",
    price: "$29.99",
    reviews: "⭐⭐⭐⭐☆ (120 reviews)",
    image: ps5_1,
  },
  {
    id: 1,
    name: "Product Name 2",
    price: "$39.99",
    reviews: "⭐⭐⭐⭐⭐ (200 reviews)",
    image: ps5_1,
  },
  {
    id: 2,
    name: "Product Name 3",
    price: "$19.99",
    reviews: "⭐⭐⭐⭐⭐ (320 reviews)",
    image: ps5_1,
  },
  {
    id: 3,
    name: "Product Name 4",
    price: "$69.99",
    reviews: "⭐⭐⭐⭐⭐ (431 reviews)",
    image: ps5_1,
  }
];
