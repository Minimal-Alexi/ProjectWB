import React, { useState } from "react";
import "./userSettings.css";

const UserSettingsPage = () => {
  const [newAccountDetails, setNewAccountDetails] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordSalt: "",
    accountType: "",
    countryCode: "",
    location: "",
    phoneNumber: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const cancelHandler = () => {
    // Implement cancel logic here
  };

  return (
    <main className="user-setting-container">
      <div className="navigate-text">
        <p>Home / My Account</p>
        <p>
          Welcome <a href="">Guest</a>
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
                  <input
                    id="countryCode"
                    name="countryCode"
                    value={newAccountDetails.countryCode}
                    onChange={handleInputChange}
                    placeholder="Enter your country code"
                    required
                  />
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
                  <input
                    id="gender"
                    name="gender"
                    value={newAccountDetails.gender}
                    onChange={handleInputChange}
                    placeholder="Enter your gender"
                  />
                </div>
              </div>
            </section>

            <section className="password-section">
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

            <div className="user-form-button-container">
              <button type="button" onClick={cancelHandler} className="">
                Cancel
              </button>
              <button type="submit" className="">
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
