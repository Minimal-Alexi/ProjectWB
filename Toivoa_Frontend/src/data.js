import product1 from "./images/ps5.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";
import ps5_main from "./images/ps5_controller_main.png";
import ps5_1 from "./images/ps5_controller1.png";
import ps5_2 from "./images/ps5_controller2.jpg";
import ps5_3 from "./images/ps5_controller3.png";
import iphone_1 from "./images/iphone_1.png";
import iphone_2 from "./images/iphone_2.png";
import iphone_3 from "./images/iphone_3.png";

export const pageLinks = [
  { id: 1, href: "/", text: "Main" },
  { id: 2, href: "/Settings", text: "Settings" },
  { id: 3, href: "/Productpage/{:id}", text: "Productpage" },
];

export const products = [
  {
    id: 1,
    name: "Sony Playstation 5 Digital Edition",
    price: 399.99,
    reviews: "⭐⭐⭐⭐☆ (120 reviews)",
    description: "High-quality sneakers perfect for running and casual wear.",
    image: [ps5_main, ps5_1, ps5_2, ps5_3],
    sizes: ["S", "M", "L", "XL"],
    isInStock: true,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
      { name: "Blue", hex: "#0000ff" },
      { name: "Yellow", hex: "#ffff00" },
    ],
  },
  {
    id: 2,
    name: "Iphone 15",
    price: 899.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    description: "The WORSE iphone ever.",
    image: [product2, iphone_1, iphone_2, iphone_3],
    sizes: ["128", "256", "1T"],
    isInStock: true,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
      { name: "Blue", hex: "#0000ff" },
      { name: "Yellow", hex: "#ffff00" },
    ],
  },
];
