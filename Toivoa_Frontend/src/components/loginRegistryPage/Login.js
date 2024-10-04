import Image from '../../images/image.jpeg';
import { useState } from 'react';

const Login = ({ switchToCreate, closeEvent }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showErrorNotFilled, setShowErrorNotFilled] = useState(false);
    const [showErrorNotMatch, setShowErrorNotMatch] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (!email || !password) {
                setShowErrorNotMatch(false);
                setShowErrorNotFilled(true);
            } else {
                const response = await fetch('/api/users/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const user = await response.json();
                    sessionStorage.setItem('user', JSON.stringify(user));
                    console.log("User logged in successfully");
                    setEmail('');
                    setPassword('');

                    setShowErrorNotFilled(false);
                    setShowErrorNotMatch(false);
                } else {
                    console.error('Signup failed');
                    setShowErrorNotMatch(true);
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="white-rectangle">
            <div className="invisible-rectangle">
                <img src={Image} alt='Image' className='image' />
            </div>
            <div>
                <form onSubmit={handleLogin}>
                    <ul className="submit-stuff">
                        <li><h1 className="login-title">Log in</h1></li>
                        <li>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </li>
                        <li>
                            {showErrorNotFilled ? <h4>Fill all the fields</h4> : null}
                        </li>
                        <li>
                            {showErrorNotMatch ? <h4>Email and password does not match</h4> : null}
                        </li>
                        <li>
                            <button type="submit">Submit</button>
                        </li>
                        <li>
                            <a onClick={switchToCreate} className="switch-to-create">Don't have an account?</a>
                        </li>
                    </ul>
                </form>
            </div>
            <button onClick={closeEvent} className='closeButton'><h1>x</h1></button>
        </div>
    );
};

export default Login;
