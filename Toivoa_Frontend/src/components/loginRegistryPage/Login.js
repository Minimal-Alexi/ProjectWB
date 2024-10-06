import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext'; // Import AuthContext
import useLogin from '../../hooks/useLogin'; 
import useField from '../../hooks/useField';
import Image from '../../images/image.jpeg';

const Login = () => {
    const navigate = useNavigate();
    const { login: contextLogin } = useContext(AuthContext); // Access login from AuthContext

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const emailField = useField('email');
    const passwordField = useField('password');
    console.log(emailField)
    console.log(passwordField)

    const { login, error } = useLogin('/api/users/login'); // Assuming this sends the login request to the server

    const [showError, setShowError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Check if the fields are filled
        if (!emailField.value || !passwordField.value) {
            setShowError('Please fill all fields.');
            return;
        }

        // Make the API call to login
        const response = await login({ email: emailField.value, password: passwordField.value });
        console.log(response)
        // If the login is successful
        if (response?.token) {
            // Use the AuthContext login method to update the auth state
            contextLogin(response.token); // Save the JWT token
            setShowError(''); // Clear previous error messages
            console.log('User logged in successfully');
            navigate('/'); // Redirect to home page
        } else {
            // If login fails, show an error message
            setShowError('Email and password do not match.');
            console.error('Login failed');
        }
    };

    const switchToCreate = () => {
        navigate('/signup')
    }

    const closeEvent = () => {
        navigate('/')
    }

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
                                required
                            />
                        </li>
                        <li>
                            <input
                                {...passwordField}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input"
                                required
                            />
                        </li>
                        <li>
                            {showError && <h4>{showError}</h4>}
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
