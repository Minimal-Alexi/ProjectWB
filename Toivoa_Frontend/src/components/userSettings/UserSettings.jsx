import React, {useState} from "react"

const UserSettingsPage = () => 
    {

        const [newAccountDetails,setnewAccountDetails] = useState({
            name:{firstName:"",lastName:""},
            location:{countryCode:"",address:""},
            sensitive:{password:"",email:"",phonenr:""},
            personal:{age:"",gender:""}
        })

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            const [section, key] = name.split(".");
            setnewAccountDetails((prevDetails) => ({
                ...prevDetails,
                [section]: {
                    ...prevDetails[section],
                    [key]: value
                }
            }));
          }
        const cancelHandler = () => 
            {
                
            } 
          return (
            <section className="userSetting">
                <h3>Edit your profile.</h3>
                <form>
                    <div className="sidebySide">
                        <div>
                            <p>First Name</p>
                            <input
                                name="name.firstName"
                                value={newAccountDetails.name.firstName}
                                onChange={handleInputChange}
                            />
                            <p>Last Name</p>
                            <input
                                name="name.lastName"
                                value={newAccountDetails.name.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <p>Age</p>
                            <input
                                name="personal.age"
                                value={newAccountDetails.personal.age}
                                onChange={handleInputChange}
                            />
                            <p>Gender</p>
                            <input
                                name="personal.gender"
                                value={newAccountDetails.personal.gender}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <p>Country</p>
                            <input
                                name="location.countryCode"
                                value={newAccountDetails.location.countryCode}
                                onChange={handleInputChange}
                            />
                            <p>Address</p>
                            <input
                                name="location.address"
                                value={newAccountDetails.location.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <p>Phone number</p>
                            <input
                                name="sensitive.phonenr"
                                value={newAccountDetails.sensitive.phonenr}
                                onChange={handleInputChange}
                            />
                            <p>Email</p>
                            <input
                                name="sensitive.email"
                                value={newAccountDetails.sensitive.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="passwordBox">
                        <h4>Password change</h4>
                        <div className="currentPasswordBox">
                            <p>{newAccountDetails.sensitive.password}</p>
                            <button>Reveal password</button>
                        </div>
                        <input
                            name="sensitive.password"
                            value={newAccountDetails.sensitive.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="button">Cancel</button>
                    <button type="submit">Save changes</button>
                </form>
            </section>
        );
    }

export default UserSettingsPage;