//import ProductDetails from './components/loc-work/ProductDetails'
import UserSettingsPage from './components/alex-work/UserSettingsEdit'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
          <Routes>
            {/* <Route path="/Product" element={<Product />} /> */}
            <Route path="/Settings" element={<UserSettingsPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
    </BrowserRouter>
  );
}

export default App;
