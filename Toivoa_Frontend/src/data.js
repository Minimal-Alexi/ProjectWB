import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import ps5_main from "./images/ps5.png";
import ps5_1 from "./images/ps5_1.jpg";
import ps5_2 from "./images/ps5_2.jpg";
import ps5_3 from "./images/ps5_controller3.png";
import iphone_1 from "./images/iphone_1.png";
import iphone_2 from "./images/iphone_2.png";
import iphone_3 from "./images/iphone_3.png";
import nitendo from "./images/nitendo_main.png";
import nitendo2 from "./images/nitendo_1.png";
import nitendo3 from "./images/nitendo_2.png";
import nitendo4 from "./images/nitendo_3.png";
import ipad from "./images/ipad-pro-main.jpg";
import ipad1 from "./images/ipad_1.jpg";
import ipad2 from "./images/ipad_2.jpg";
import ipad3 from "./images/ipad_3.jpg";
import airpods from "./images/airpod.jpg"
import airpods_1 from "./images/airpod_1.jpg"
import airpods_2 from "./images/airpod_2.jpg"
import airpods_3 from "./images/airpod_3.jpg"

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
    description: "The most power full console machine ever built",
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
    name: "Iphone 15 Pro",
    price: 899.99,
    reviews: "⭐⭐⭐⭐☆ (800 reviews)",
    description: "The WORST iphone ever.",
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
  {
    id: 3,
    name: "Nitendo Switch",
    price: 399.99,
    reviews: "⭐⭐⭐⭐⭐ (1396 reviews)",
    description: "Best selling hand console machine",
    image: [nitendo, nitendo2, nitendo3, nitendo4],
    sizes: ["128", "256"],
    isInStock: true,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
    ],
  },
  {
    id: 4,
    name: "Ipad pro 12.9 inch",
    price: 1090,
    reviews: "⭐⭐⭐☆☆ (907 reviews)",
    description: "Best ipad ever",
    image: [ipad, ipad1, ipad2, ipad3],
    sizes: ["128", "256", "512", "1T"],
    isInStock: false,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
    ],
  },
  {
    id: 5,
    name: "Airpods Pro",
    price: 249.90,
    reviews: "⭐⭐⭐☆☆ (182 reviews)",
    description: "Wireless Earbuds, Bluetooth Headphones, Active Noise Cancellation",
    image: [airpods, airpods_1, airpods_2, airpods_3],
    sizes: [],
    isInStock: false,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
    ],
  },
];

export const relatedProducts = [
  {
    id: 1,
    name: "Amazonire Tv ",
    price: 899.99,
    reviews: "⭐⭐⭐☆☆ (600 reviews)",
    image: product3,
  },
  {
    id: 2,
    name: "Air Pod pro",
    price: 259.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product4,
  },
  {
    id: 3,
    name: "Nikon Camera",
    price: 509.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product5,
  },
  {
    id: 4,
    name: "Anker Sound",
    price: 39.9,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product6,
  },
];

export const wishProducts = [
  {
    id: 1,
    name: "Amazonire Tv ",
    price: 899.99,
    reviews: "⭐⭐⭐☆☆ (600 reviews)",
    image: product3,
  },
  {
    id: 2,
    name: "Air Pod pro",
    price: 259.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product4,
  },
  {
    id: 3,
    name: "Nikon Camera",
    price: 509.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product5,
  },
  {
    id: 4,
    name: "Anker Sound",
    price: 39.9,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product6,
  },
];
