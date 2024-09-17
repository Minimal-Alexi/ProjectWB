const NotFound = (openMainPage) => {
  return (
    <div className="notfound">
      <ul className="not-found-list-of-items">
        <li><h1>404 Not Found</h1></li>
        <li>You're searched page was not found</li>
        <li><button>Back to home page</button></li>
      </ul>
    </div>
  );
};

export default NotFound;