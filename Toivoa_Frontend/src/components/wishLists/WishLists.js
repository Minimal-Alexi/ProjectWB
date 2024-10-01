import WishListsCard from "./WishListsCard";
import { WishListContext } from "../../context/WishListContext"; // Import the context
import { useContext } from "react";
import "./WishLists.css";

const WishLists = () => {
  const { wishlist, removeFromWishlist } = useContext(WishListContext); // Get the wishlist and removal function

  const handleDeleteWishLists = (wishId) => {
    removeFromWishlist(wishId); // Remove from wishlist
  };

  return (
    <div className="wish-lists-container">
      <div className="wish-lists-header">
        <p>Wishlist({wishlist.length})</p>
        <button className="move-all-btn">Move All To Bag</button>
      </div>
      <div className="wish-lists-cards">
        {wishlist.map((wish) => {
          return (
            <WishListsCard
              {...wish}
              key={wish._id}
              onDelete={handleDeleteWishLists}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishLists;
