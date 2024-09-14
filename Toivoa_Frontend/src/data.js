import product1 from "./images/ps5.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";

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
    image: product1,
  },
  {
    id: 2,
    name: "Apple iPhone 16 Pro (256GB)",
    price: 1401.99,
    reviews: "⭐⭐⭐⭐⭐ (200 reviews)",
    image: product2,
  },
  {
    id: 3,
    name: 'Amazon Fire TV 55" 4K UHD smart TV',
    price: 295.29,
    reviews: "⭐⭐⭐⭐⭐ (320 reviews)",
    image: product3,
  },
  {
    id: 4,
    name: "Apple AirPods Pro with MagSafe Case",
    price: 257.33,
    reviews: "⭐⭐⭐⭐⭐ (431 reviews)",
    image: product4,
  },
  {
    id: 5,
    name: "Nikon Z f Kit 40 mm 1:2.0 Full Frame Camera",
    price: 59.99,
    reviews: "⭐⭐⭐⭐⭐ (505 reviews)",
    image: product5,
  },
  {
    id: 6,
    name: "Anker SoundCore 2 Bluetooth Speaker",
    price: 27.99,
    reviews: "⭐⭐⭐⭐⭐ (69 reviews)",
    image: product6,
  },
  {
    id: 7,
    name: "Canon EOS R50 System Camera + RF-S 18-45 is STM Lens",
    price: 789.91,
    reviews: "⭐⭐⭐⭐⭐ (7 reviews)",
    image: product7,
  },
];
