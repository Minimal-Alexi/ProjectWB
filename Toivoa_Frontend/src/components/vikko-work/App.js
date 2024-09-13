import './login-create.css';
import { useState, useRef, useEffect } from 'react';
import Create from './components/Create';
import Login from './components/Login';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showCreateButton, setShowCreateButton] = useState(true);

  const ref = useRef(null);

  const showL = () => {
    setShowLogin(true);
    setShowCreate(false);
    setShowLoginButton(false);
    setShowCreateButton(false);
  };

  const showC = () => {
    setShowLogin(false);
    setShowCreate(true);
    setShowLoginButton(false);
    setShowCreateButton(false);
  };

  const clickEventLogin = () => {
    showL();
  };

  const clickEventCreate = () => {
    showC();
  };

  const closeLoginAndCreate = (event) => {
    if (
      (ref.current && !ref.current.contains(event.target))
    ) {
      setShowLogin(false);
      setShowCreate(false);
      setShowLoginButton(true);
      setShowCreateButton(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeLoginAndCreate);
    return () => document.removeEventListener('mousedown', closeLoginAndCreate);
  }, []);

  return (
    <div>
      <div>
        {showLoginButton ? <button onClick={clickEventLogin}>Show login</button> : null}
        {showCreateButton ? <button onClick={clickEventCreate}>Show create</button> : null}
      </div>
      <div ref={ref}>
        {showLogin ? <Login switchToCreate={showC} /> : null}
        {showCreate ? <Create switchToLogin={showL} /> : null}
      </div>
    </div>
  );
}

export default App;
