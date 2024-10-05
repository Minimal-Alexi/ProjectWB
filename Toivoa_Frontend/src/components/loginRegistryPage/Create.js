import { useState } from "react";
import useSignup from "../../hooks/useSignUp";
import { useNavigate } from "react-router-dom";
import useField from "../../hooks/useField";
import { countryCodes } from "../../data";
import Image from "../../images/image.jpeg";

const CreateAccount = ({ switchToLogin, closeEvent }) => {
  const navigate = useNavigate();

  // Local state for user inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [accountType, setAccountType] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // Field hooks for user input
  const usernameField = useField("text", username, setUsername);
  const emailField = useField("email", email, setEmail);
  const phoneNumberField = useField("text", phoneNumber, setPhoneNumber);
  const firstNameField = useField("text", firstName, setFirstName);
  const lastNameField = useField("text", lastName, setLastName);
  const passwordField = useField("password", password, setPassword);
  const locationField = useField("text", location, setLocation);
  const ageField = useField("number", age, setAge);
  const genderField = useField("select", gender, setGender);
  const accountTypeField = useField("select", accountType, setAccountType);
  const countryCodeField = useField("select", countryCode, setCountryCode);

  const { signup, error } = useSignup("/api/users/signup");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Construct user object for signup
    const user = {
      username: usernameField.value,
      email: emailField.value,
      password: passwordField.value,
      accountType: accountTypeField.value,
      countryCode: countryCodeField.value,
      location: locationField.value,
      phoneNumber: phoneNumberField.value,
      age: ageField.value,
      gender: genderField.value,
      firstName: firstNameField.value,
      lastName: lastNameField.value,
    };

    await signup(user);

    if (!error) {
      console.log("User created successfully");
      navigate("/"); // Redirect to home page or another page after signup
    }
  };

  return (
    <div className="white-rectangle">
      <div className="invisible-rectangle">
        <h1>
          <img src={Image} alt="product" className="image" />
        </h1>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <ul className="submit-stuff">
            <li>
              <h1 className="create-title">Create account</h1>
            </li>
            <li>
              <label>Username:</label>
              <input
                {...usernameField}
                placeholder="Enter your account username"
              />
            </li>
            <li>
              <label>Email:</label>
              <input {...emailField} placeholder="Enter your email" />
            </li>
            <li>
              <label>Phone Number:</label>
              <input
                {...phoneNumberField}
                placeholder="Enter your phone number"
              />
            </li>
            <li>
              <label>First Name:</label>
              <input {...firstNameField} placeholder="Enter your first name" />
            </li>
            <li>
              <label>Last Name:</label>
              <input {...lastNameField} placeholder="Enter your last name" />
            </li>
            <li>
              <label>Password:</label>
              <input {...passwordField} placeholder="Enter your password" />
            </li>
            <li>
              <label>Account Type:</label>
              <select {...accountTypeField}>
                <option defaultValue>Select account type</option>
                <option value="consumer">Consumer</option>
                <option value="seller">Seller</option>
                <option value="market vendor">Marketer Vendor</option>
              </select>
            </li>
            <li>
              <label>Country Code:</label>
              <select {...countryCodeField}>
                <option defaultValue>Select country</option>
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <label>Location:</label>
              <input {...locationField} placeholder="Enter your location" />
            </li>
            <li>
              <label>Age:</label>
              <input {...ageField} placeholder="Enter your age" type="number" />
            </li>
            <li>
              <label>Gender:</label>
              <select {...genderField}>
                <option defaultValue>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </li>
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
