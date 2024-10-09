import React, { useEffect, useState } from "react";
import findUsername from "../../hooks/findUsername";
import StarDisplay from "../../hooks/reviewDisplay";

/*
    userID:"9138249iISDAJFDKA"
    rating: 3.5
    comment:"Shit product."
    date: "04.01.1994"
*/

const ReviewCard = (props) => {
    const [username, setUsername] = useState("[Loading username...]");
    useEffect(() => {
        const fetchUsername = async () => {
            const user = await findUsername(props.userID);
            setUsername(user || "[Missing username]");
        };

        fetchUsername();
    }, [props.userID]);

    return (
        <div className="ReviewCard">
            <span>
                <h4>{username}</h4>
                <p>{props.date}</p>
            </span>
            <StarDisplay score={props.rating} />
            <p>{props.comment}</p>
        </div>
    );
};


export default ReviewCard;