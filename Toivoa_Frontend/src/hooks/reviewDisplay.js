
const StarDisplay = ({score}) => 
    {
        const starCount = 5;
        const filledStars = Math.round(score);
        return (
            <div className="Stars">
                {[...Array(starCount)].map((_, index) => (
                    <span key={index}>
                        {index < filledStars ? '★' : '☆'}
                    </span>
                ))}
            </div>
        );
    }

export default StarDisplay