import WishListsCard from './WishListsCard'
import {wishLists} from './wishListsData'
import './WishLists.css'

const WishLists = () => {
    return(
        <div className="wish-lists-container">
            <div className="wish-lists-header">
                <p>Wishlist(4)</p>
                <button className="move-all-btn">
                    Move All To Bag
                </button>
            </div>
            <div className="wish-lists-cards">
        {wishLists.map((wish) => (
          <WishListsCard {...wish} key={wish.id} />
        ))}
      </div>
        </div>
    )
}

export default WishLists