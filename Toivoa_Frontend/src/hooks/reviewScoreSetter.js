import React, { useState } from "react";

const ReviewScoreSetter = ({rating,setRating}) => {
  const [hover, setHover] = useState(0);    // State to store the hover value

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <span
            key={index}
            className={currentRating <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(rating)}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          >
           {/* If current rating is less than or equal to hover or rating, display filled star else unfilled */}
           {currentRating <= (hover || rating) ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default ReviewScoreSetter;

//I hate frontend work so much.
