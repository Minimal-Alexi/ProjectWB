import {useState} from "react";
import useField from "../../hooks/useField"
import ReviewScoreSetter from "../../hooks/reviewScoreSetter";

const AddReviewField = () => 
    {
        const [rating,setRating] = useState(0);
        const [comment,setComment] = useState('');

        const commentField = useField("text",comment,setComment);


        const handleSubmit = (event) => {
            event.preventDefault();
            // You can handle the review submission here
            console.log(`Rating: ${rating}, Comment: ${comment}`);
          };

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Score:</label>
                    <ReviewScoreSetter rating={rating} setRating={setRating}/>
                </div>
                <div>
                    <label>Review:</label>
                    <textarea {...commentField}
                    rows="4"
                    cols="50"
                    placeholder="Write your review here."
                    />
                </div>
                <button type="submit">Submit review</button>
            </form>
        )

    }

export default AddReviewField;