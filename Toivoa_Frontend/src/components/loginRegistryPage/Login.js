import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import useField from '../../hooks/useField';
import Image from '../../images/image.jpeg';

const Login = ({ switchToCreate, closeEvent }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailField = useField('email', email, setEmail);
    const passwordField = useField('password', password, setPassword);

    const { login, error } = useLogin('/api/users/login');

    const [showErrorNotFilled, setShowErrorNotFilled] = useState(false);
    const [showErrorNotMatch, setShowErrorNotMatch] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setShowErrorNotFilled(true);
            setShowErrorNotMatch(false);
            return;
        }

        await login({
            email: email,
            password: password,
        });

        if (!error) {
            setShowErrorNotFilled(false);
            setShowErrorNotMatch(false);
            console.log('User logged in successfully');
            navigate('/');
        } else {
            setShowErrorNotMatch(true);
            console.error('Login failed');
        }
    };

    return (
        <div className="white-rectangle">
            <div className="invisible-rectangle">
                <img src={Image} alt="Image" className="image" />
            </div>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <ul className="submit-stuff">
                        <li><h1 className="login-title">Log in</h1></li>
                        <li>
                            <input
                                {...emailField}
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input"
                            />
                        </li>
                        <li>
                            <input
                                {...passwordField}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input"
                            />
                        </li>
                        <li>
                            {showErrorNotFilled && <h4>Fill all the fields</h4>}
                            {showErrorNotMatch && <h4>Email and password do not match</h4>}
                        </li>
                        <li>
                            <button type="submit">Log in</button>
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
