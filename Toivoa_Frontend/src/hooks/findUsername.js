
const findUsername = async (userID) => 
    {
        try
        {
            const link = `/api/users/${userID}`;
            const response = await fetch(link,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );
            if (response.ok)
                {
                    const data = await response.json();
                    return data.username;
                }
        }
        catch(err){
            console.error(err);
            console.error("Failed to fetch username.");
            return "[Missing username]."
        }
    }
export default findUsername;