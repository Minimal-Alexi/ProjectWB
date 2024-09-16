import React, { useState } from "react";
import "./userSettings.css";
// import Input from "../common-components/Input";

const UserSettingsPage = () => {
  const [newAccountDetails, setNewAccountDetails] = useState({
    name: { firstName: "", lastName: "" },
    location: { countryCode: "", address: "" },
    sensitive: { password: "", email: "", phonenr: "" },
    personal: { age: "", gender: "" },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [section, key] = name.split(".");
    setNewAccountDetails((prevDetails) => ({
      ...prevDetails,
      [section]: {
        ...prevDetails[section],
        [key]: value,
      },
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
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="name.firstName"
                    value={newAccountDetails.name.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="info">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="name.lastName"
                    value={newAccountDetails.name.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="info">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={newAccountDetails.personal.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="info">
                  <label htmlFor="gender">Address</label>
                  <input
                    id="address"
                    name="personal.address"
                    value={newAccountDetails.personal.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </section>

            <section className="password-section">
              <p>Password Changes</p>

              <div className="password">
                <input
                  id="currentPassword"
                  name="sensitive.password"
                  value={newAccountDetails.sensitive.currentPassword}
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Current Password"
                />
                <input
                  id="newPassword"
                  name="sensitive.password"
                  value={newAccountDetails.sensitive.newPassword}
                  onChange={handleInputChange}
                  type="password"
                  placeholder="New Password"
                />
                <input
                  id="confirmNewPassword"
                  name="sensitive.password"
                  value={newAccountDetails.sensitive.confirmNewPassword}
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Confirm New Password"
                />
              </div>
            </section>

            <div className="user-form-button-container">
              <button type="button" onClick={cancelHandler} className="">
                Cancel
              </button>
              <button type="submit" className="">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UserSettingsPage;
