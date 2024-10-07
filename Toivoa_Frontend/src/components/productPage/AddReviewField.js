import { useState, useContext } from "react";
import useField from "../../hooks/useField"
import ReviewScoreSetter from "../../hooks/reviewScoreSetter";
import { AuthContext } from "../../context/authContext";

const AddReviewField = ({ _id }) => {
    const { token } = useContext(AuthContext);

    const [rating, setRating] = useState(0);
    const comment = useField("text");


    const handleSubmit = async (event) => {
        event.preventDefault();

        const reviewData = {
            rating: rating,
            comment: comment.value
        };

        try {
            const response = await fetch(`/api/products/${_id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(reviewData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData);
                return;
            }

            const data = await response.json();
            console.log('Review submitted:', data);
            setRating(0);

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting your review');
        }
    };

    return (
        <div class="review-form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Score:</label>
                    <ReviewScoreSetter rating={rating} setRating={setRating} />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea {...comment}
                        id="comment"
                        rows="4"
                        cols="50"
                        placeholder="Write your review here."
                    />
                </div>
                <button type="submit">Submit review</button>
            </form>
        </div>

    )

}

export default AddReviewField;