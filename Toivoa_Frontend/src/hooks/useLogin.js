import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function useLogin(url) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Get login function from AuthContext
  const { login: authLogin } = useContext(AuthContext);

  const login = async (object) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });
      const user = await response.json();

      if (!response.ok) {
        setError(user.error);
        setIsLoading(false);
        return;
      }

      console.log(user);

       // Save user data to local storage (optional)
       localStorage.setItem("user", JSON.stringify(user));

      // Use the login method from AuthContext to save the JWT token
      authLogin(user.token);

      setIsLoading(false);
      return user;
    } catch (err) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}



