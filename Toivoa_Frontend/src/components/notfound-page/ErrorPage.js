import NavBar from '../common-components/NavBar';
import Footer from '../common-components/Footers';
import NotFound from './NotFound';
import './NotFoundStyling.css'

const ErrorPage = () => (
  <div className="error-page-container">
    <NavBar />
    <NotFound />
    <Footer />
  </div>
);

export default ErrorPage;