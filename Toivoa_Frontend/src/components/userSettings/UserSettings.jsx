import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext"; // Import the AuthContext
import { countryCodes } from "../../data";
import "./userSettings.css";

const UserSettingsPage = () => {
  const { isAuthenticated, isLoading, token} = useContext(AuthContext); // Access authentication context
  let user = JSON.parse(localStorage.getItem("user")).user;
  const [newAccountDetails, setNewAccountDetails] = useState({
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    /*     password: "",
        confirmPassword: "", */
    countryCode: user.countryCode,
    location: user.location || "",
    phoneNumber: user.phoneNumber || "",
    age: user.age || "",
    gender: user.gender || "",
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle cancel action
  const cancelHandler = () => {
    setNewAccountDetails({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      countryCode: user.countryCode,
      location: user.location || "",
      phoneNumber: user.phoneNumber || "",
      age: user.age || "",
      gender: user.gender || "",
    });
  };

  const updateUser = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: 'PUT',
        body: JSON.stringify(newAccountDetails),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
      const newUser = {user:json};
      localStorage.removeItem("user");
      localStorage.setItem("user",JSON.stringify(newUser));
    } catch (error) {
      // Catch and log any errors
      console.error('Failed to update user:', error);
    }
  };

// If the user is not authenticated, redirect to login page
if (!isAuthenticated) {
  return <Navigate to="/login" />;
}

return (
  <main className="user-setting-container">
    <div className="navigate-text">
      <p>Home / My Account</p>
      <p>
        Welcome <span>{user.username || "Guest"}</span>
      </p>
    </div>
    <div className="user-container">
      <div className="user-nav">
        <div className="user-account">
          <div className="user-manage">
            <h4>Manage My Account</h4>
            <ul>
              <li>
                <a href="">My profile</a>
              </li>
              <li>
                <a href="">Address Book</a>
              </li>
              <li>
                <a href="">My Payment Options</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="user-manage">
          <h4>My Orders</h4>
          <ul>
            <li>
              <a href="">My Returns</a>
            </li>
            <li>
              <a href="">My Cancellations</a>
            </li>
          </ul>
        </div>
        <div className="user-manage">
          <h4>My Wishlists</h4>
        </div>
      </div>
      <div className="user-form">
        <h4>Edit your profile</h4>
        <form>
          <section>
            <div className="info-section">
              <div className="info">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  value={newAccountDetails.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="info">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={newAccountDetails.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="info">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={newAccountDetails.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="info-section">
              <div className="info">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={newAccountDetails.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="info">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={newAccountDetails.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="info-section">
              <div className="info">
                <label htmlFor="countryCode">Country Code</label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={newAccountDetails.countryCode}
                  onChange={handleInputChange}
                  placeholder="Enter your country code"
                  required
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
              </div>
              <div className="info">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  value={newAccountDetails.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                />
              </div>
            </div>
            <div className="info-section">
              <div className="info">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  name="age"
                  value={newAccountDetails.age}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Enter your age"
                />
              </div>
              <div className="info">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={newAccountDetails.gender}
                  onChange={handleInputChange}
                  placeholder="Enter your gender"
                >
                  <option value="">Please choose one</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-Binary</option>
                </select>
              </div>
            </div>
          </section>

          {/*             <section className="password-section">
              <p>Password Changes</p>
              <div className="password">
                <input
                  id="password"
                  name="password"
                  value={newAccountDetails.password}
                  onChange={handleInputChange}
                  type="password"
                  placeholder="New Password"
                  required
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={newAccountDetails.confirmPassword}
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Confirm new password"
                  required
                />
              </div>
            </section>
            Not bothering with this. We'd need to reencrypt the password.
 */}
          <div className="user-form-button-container">
            <button type="button" onClick={cancelHandler} className="">
              Cancel
            </button>
            <button type="submit" className="" onClick={updateUser}>
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
);
};

export default UserSettingsPage;
