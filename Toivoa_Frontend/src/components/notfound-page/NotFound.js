import { useNavigate } from "react-router-dom";



const NotFound = (openMainPage) => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <ul className="not-found-list-of-items">
        <li><h1>404 Not Found</h1></li>
        <li>You're searched page was not found</li>
        <li><button onClick={() => navigate("/")}>Back to home page</button></li>
      </ul>
    </div>
  );
};

export default NotFound;