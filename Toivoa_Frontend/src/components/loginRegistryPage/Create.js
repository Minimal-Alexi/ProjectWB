import Image from "../../images/image.jpeg";
import { useState } from "react";
import useField from "../../hooks/useField";
import { countryCodes } from "../../data";
import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import { AuthContext } from "../../context/authContext"; // Import AuthContext
import { useContext } from "react";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { login: contextLogin } = useContext(AuthContext); // Access login from AuthContext
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [password, setPassword] = useState('');
  // const [accountType, setAccountType] = useState();
  // const [countryCode, setCountryCode] = useState();

  const username = useField("text");
  const email = useField("email");
  const phonenumber = useField("phonenumber");
  const firstName = useField("text");
  const lastName = useField("text");
  const password = useField("password");
  const accountType = useField("select");
  const countryCode = useField("select");

  const { signup, error } = useSignUp("/api/users/signup");

  const [showError, setShowError] = useState(false);

  const [showusernameError, setShowUsernameError] = useState(false);
  const [showemailError, setShowEmailError] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (
      !username.value ||
      !email.value ||
      !phonenumber.value ||
      !firstName.value ||
      !lastName.value ||
      !password.value ||
      !accountType.value ||
      !countryCode.value
    ) {
      setShowError(true);
      return;
    } else {
      const user = {
        username,
        email,
        phonenumber,
        firstName,
        lastName,
        password,
        accountType,
        countryCode,
      };

      console.log("user object being sent:", user);

      // Make the API call to signup
      const response = await signup({
        username: username.value,
        email: email.value,
        phonenumber: phonenumber.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        accountType: accountType.value,
        countryCode: countryCode.value,
      });
      console.log(response);
      // If the login is successful
      if (response?.token) {
        // Use the AuthContext login method to update the auth state
        // contextLogin(response.token); // Save the JWT token
        setShowError(""); // Clear previous error messages
        console.log("Sign up successfully");
        navigate("/"); // Redirect to home page
      } else {
        // If login fails, show an error message
        setShowError("error when create user");
        console.error("sign up fail");
      }
    }
  };

  //         const response = await fetch(`/users`, {
  //             method: 'POST',
  //             body: JSON.stringify(user),
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //         });
  //         const json = await response.json();

  //         if (!response.ok) {
  //             console.log('Error:', json);
  //             console.log('Error:', json.error);
  //             console.log('step 1');

  //             if (json.error && json.error.includes('E11000')) {
  //                 if (json.error.includes('username')) {
  //                     setShowUsernameError(true);
  //                     console.log("Username error")
  //                 }
  //                 if (json.error.includes('email')) {
  //                     setShowEmailError(true);
  //                     console.log("Email error")
  //                 }
  //             } else {
  //                 console.error("Unkown error:", json.message)
  //             }

  //             if (json.message && json.message.includes('username')) {
  //                 setShowUsernameError(true);
  //             }
  //             if (json.message && json.message.includes('email')) {
  //                 setShowEmailError(true);
  //             }
  //             return;
  //         }
  //         if (response.ok) {
  //             setShowError(false);
  //             setShowUsernameError(false);
  //             setShowEmailError(false);

  //             setUsername('');
  //             setEmail('');
  //             setFirstName('');
  //             setLastName('');
  //             setPassword('');
  //             setAccountType(0);
  //             setCountryCode('');
  //             console.log('New user added:', json);
  //         }
  //     }
  // };

  const switchToLogin = () => {
    navigate("/login");
  };

  const closeEvent = () => {
    navigate("/");
  };

  return (
    <div className="white-rectangle">
      <div className="invisible-rectangle">
        <h1>
          <img src={Image} alt="Image" className="image" />
        </h1>
      </div>
      <div>
        <form onSubmit={handleCreate}>
          <ul className="submit-stuff">
            <li>
              <h1 className="create-title">Create account</h1>
            </li>
            <li>
              <input
                {...username}
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
                {...email}
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input"
              />
            </li>
            <li>{showemailError ? <h4>Email already in use</h4> : null}</li>
            <li>
              <input
                {...phonenumber}
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter your phonenumber"
                className="input"
              />
            </li>
            <li>
              <input
                {...firstName}
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="input"
              />
            </li>
            <li>
              <input
                {...lastName}
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="input"
              />
            </li>
            <li>
              <input
                {...password}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="input"
              />
            </li>
            <li>
              <select
                {...accountType}
                id="accountType"
                name="accountType"
                placeholder="Enter your account type"
                className="input"
              >
                <option value="" defaultValue>
                  Select account type
                </option>
                <option value= "0">Consumer</option>
                <option value= "1">Seller</option>
                <option value= "2">Marketer Vendor</option>
              </select>
            </li>
            <li>
              <select
                {...countryCode}
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
            <li>{showError ? <h4>Fill all the fields</h4> : null}</li>
            <li>
              <button type="submit">Submit</button>
            </li>
            <li>
              <a onClick={switchToLogin} className="switch-to-create">
                Switch to login
              </a>
            </li>
          </ul>
        </form>
      </div>
      <button onClick={closeEvent} className="closeButton">
        <h1>x</h1>
      </button>
    </div>
  );
};

export default CreateAccount;
