import WishListsCard from "./WishListsCard";
import { wishProducts } from "../../data";
import { useState } from "react";
import "./WishLists.css";

const WishLists = () => {
  const [wishListsData, setWishListsData] = useState(wishProducts);

  const handleDeleteWishLists = (wishId) => {
    const updatedWishLists = wishListsData.filter((data) => data.id !== wishId);
    console.log(updatedWishLists)
    setWishListsData(updatedWishLists);
  };

  return (
    <div className="wish-lists-container">
      <div className="wish-lists-header">
        <p>Wishlist(4)</p>
        <button className="move-all-btn">Move All To Bag</button>
      </div>
      <div className="wish-lists-cards">
        {wishListsData.map((wish) => {
          return (
            <WishListsCard
              {...wish}
              key={wish.id}
              onDelete={handleDeleteWishLists}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishLists;
