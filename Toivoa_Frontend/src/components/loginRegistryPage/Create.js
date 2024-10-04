import Image from '../../images/image.jpeg';
import { useState } from 'react';
import useField from '../../hooks/useField';
import { countryCodes } from "../../data";

const CreateAccount = ({ switchToLogin, closeEvent }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState();
    const [countryCode, setCountryCode] = useState();

    const usernameField = useField('text', username, setUsername);
    const emailField = useField('email', email, setEmail);
    const phonenumberField = useField('phonenumber', phonenumber, setPhonenumber);
    const firstNameField = useField('text', firstName, setFirstName);
    const lastNameField = useField('text', lastName, setLastName);
    const passwordField = useField('password', password, setPassword);
    const accountTypeField = useField('select', accountType, setAccountType);
    const countryCodeField = useField('select', countryCode, setCountryCode);

    const [showError, setShowError] = useState(false);
    const [showusernameError, setShowUsernameError] = useState(false);
    const [showemailError, setShowEmailError] = useState(false);

    const handleCreate = async (e) => {
        e.preventDefault();

        if (!username || !email || !firstName || !lastName || !password || !accountType || !countryCode) {
            setShowError(true)
            return
        } else {
            const user = { username, email, firstName, lastName, password, accountType, countryCode };

            console.log("user object being sent:", user);

            const response = await fetch(`/api/users`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();

            if (!response.ok) {
                console.log('Error:', json);
                console.log('Error:', json.error);
                console.log('step 1');

                if (json.error && json.error.includes('E11000')) {
                    if (json.error.includes('username')) {
                        setShowUsernameError(true);
                        console.log("Username error")
                    }
                    if (json.error.includes('email')) {
                        setShowEmailError(true);
                        console.log("Email error")
                    }
                } else {
                    console.error("Unkown error:", json.message)
                }

                if (json.message && json.message.includes('username')) {
                    setShowUsernameError(true);
                }
                if (json.message && json.message.includes('email')) {
                    setShowEmailError(true);
                }
                return;
            }
            if (response.ok) {
                setShowError(false);
                setShowUsernameError(false);
                setShowEmailError(false);

                setUsername('');
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
                setAccountType(0);
                setCountryCode('');
                console.log('New user added:', json);
            }
        }
    };

    return (
        <div className="white-rectangle">
            <div className="invisible-rectangle">
                <h1>
                    <img src={Image} alt='Image' className='image' />
                </h1>
            </div>
            <div>
                <form onSubmit={handleCreate}>
                    <ul className="submit-stuff">
                        <li><h1 className="create-title">Create account</h1></li>
                        <li>
                            <input
                                {...usernameField}
                                id="username"
                                name="username"
                                placeholder="Enter your account username"
                                className="input"
                            />
                        </li>
                        <li>
                            {showusernameError ? <h4>Username already in use</h4> : null}
                        </li>
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
                            {showemailError ? <h4>Email already in use</h4> : null}
                        </li>
                        <li>
                            <input
                                {...phonenumberField}
                                id="phonenumber"
                                name="phonenumber"
                                placeholder="Enter your phonenumber"
                                className="input"
                            />
                        </li>
                        <li>
                            <input
                                {...firstNameField}
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name"
                                className="input"
                            />
                        </li>
                        <li>
                            <input
                                {...lastNameField}
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name"
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
                            <select
                                {...accountTypeField}
                                id="accountType"
                                name="accountType"
                                placeholder="Enter your account type"
                                className="input"
                            >
                                <option value="" defaultValue>
                                    Select account type
                                </option>
                                <option value="1">Consumer</option>
                                <option value="2">Seller</option>
                                <option value="3">Marketer Vendor</option>
                            </select>
                        </li>
                        <li>
                            <select
                                {...countryCodeField}
                                id="countryCode"
                                name="countryCode"
                                placeholder="Enter your country code"
                                className="input"
                            >
                                <option value="" defaultValue>
                                    Select country
                                </option>
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li>
                            {showError ? <h4>Fill all the fields</h4> : null}
                        </li>
                        <li>
                            <button type="submit">Submit</button>
                        </li>
                        <li>
                            <a onClick={switchToLogin} className="switch-to-create">Switch to login</a>
                        </li>
                    </ul>
                </form>
            </div>
            <button onClick={closeEvent} className='closeButton'><h1>x</h1></button>
        </div>
    );
};

export default CreateAccount;
