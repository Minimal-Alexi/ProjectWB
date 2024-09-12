//import ProductDetails from './components/loc-work/ProductDetails'
import UserSettingsPage from './components/alex-work/UserSettingsEdit'
import Main from './components/thien-work/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/Main" element={<Main />} />
            {/* <Route path="/Product" element={<Product />} /> */}
            <Route path="/Settings" element={<UserSettingsPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
    </BrowserRouter>
  );
}

export default App;
