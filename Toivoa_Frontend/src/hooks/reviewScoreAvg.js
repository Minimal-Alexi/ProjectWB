const reviewScoreAvg = (reviewList) => 
    {
        let score = 0;
        const reviewNr = reviewList.length;
        for(const review of reviewList)
            {
                score += review.rating;
            }
        return score/=reviewNr;
    }
export default reviewScoreAvg