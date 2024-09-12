import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/Main">Home</Link></li>
        <li><Link to="/Settings">Settings</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navigation;