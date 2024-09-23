import Image from '../../images/image.jpeg';
import { useState } from 'react';

const apiURL = 'http://localhost:4000/api/users'

const CreateAccount = ({ switchToLogin, closeEvent }) => {
    const [username, setUsername] = useState('testtest');
    const [email, setEmail] = useState('test@test.com');
    const [firstName, setFirstName] = useState('test')
    const [lastName, setLastName] = useState('testtest')
    const [password, setPassword] = useState('password');
    const passwordSalt = 'gsgadthjad'
    const [accountType, setAccountType] = useState(0);
    const [countryCode, setCountryCode] = useState(12345);
    const [location, setLocation] = useState('location');
    const [phonenumber, setPhonenumber] = useState('1234567');
    const [age, setAge] = useState('45');
    const [gender, setGender] = useState('M');

    const handleCreate = async (e) => {
        e.preventDefault();

        const user = { username, email, firstName, lastName, password, passwordSalt, accountType, countryCode };

        console.log("user object being sent:", user);

        const response = await fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();

        if (!response.ok) {
            console.log('Error:', json);
        }
        if (response.ok) {
            setUsername('');
            setEmail('');
            setPassword('');
            setAccountType(0);
            setCountryCode('');
            setLocation('');
            setPhonenumber('');
            setAge('');
            setGender('');
            console.log('New user added:', json);
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
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your account username"
                                className="input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </li>
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
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name"
                                className="input"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name"
                                className="input"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                            <input
                                type="text"
                                id="accountType"
                                name="accountType"
                                placeholder="Enter your account type"
                                className="input"
                                value={accountType}
                                onChange={(e) => setAccountType(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                id="countryCode"
                                name="countryCode"
                                placeholder="Enter your country code"
                                className="input"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter your location"
                                className="input"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="tel"
                                id="phonenumber"
                                name="phonenumber"
                                placeholder="Enter your phone number"
                                className="input"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Enter your age"
                                className="input"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                id="gender"
                                name="gender"
                                placeholder="Enter your gender"
                                className="input"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
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
