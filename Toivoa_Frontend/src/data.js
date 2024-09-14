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
    name: "Product Name 1",
    price: "$29.99",
    reviews: "⭐⭐⭐⭐☆ (120 reviews)",
    image: product1,
  },
  {
    id: 2,
    name: "Product Name 2",
    price: "$39.99",
    reviews: "⭐⭐⭐⭐⭐ (200 reviews)",
    image: product2,
  },
  {
    id: 3,
    name: "Product Name 3",
    price: "$19.99",
    reviews: "⭐⭐⭐⭐⭐ (320 reviews)",
    image: product3,
  },
  {
    id: 4,
    name: "Product Name 4",
    price: "$69.99",
    reviews: "⭐⭐⭐⭐⭐ (431 reviews)",
    image: product4,
  },
  {
    id: 5,
    name: "Product Name 5",
    price: "$59.99",
    reviews: "⭐⭐⭐⭐⭐ (505 reviews)",
    image: product5,
  },
  {
    id: 6,
    name: "Product Name 6",
    price: "$79.99",
    reviews: "⭐⭐⭐⭐⭐ (69 reviews)",
    image: product6,
  },
  {
    id: 7,
    name: "Product Name 7",
    price: "$49.99",
    reviews: "⭐⭐⭐⭐⭐ (7 reviews)",
    image: product7,
  },
];
