const userSettingsFetcher = async () => 
    {
        try
        {
            const link = `/api/users/${userID}/settings`;
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
                    return data;
                }
        }
        catch(err){
            console.error(err);
            console.error("Failed to fetch username.");
            return "[Missing username]."
        }
    }

export default userSettingsFetcher