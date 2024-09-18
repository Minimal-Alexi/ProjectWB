import Input from '../common-components/Input'
import Image from '../../images/image.jpeg';

const CreateAccount = ({ switchToLogin, closeEvent }) => {
    return (
        <div className="white-rectangle">
            <div className="invisible-rectangle">
                <h1>
                <img src={Image} alt='Image' className='image' />
                </h1>
            </div>
            <div>
                <ul className="submit-stuff">
                    <li><h1 className="create-title">Create account</h1></li>
                    <li>
                        <Input
                            type="text"
                            id="name" name="name"
                            placeholder="Enter your account name"
                            className="input" />
                    </li>
                    <li>
                        <Input
                            type="tel"
                            id="phonenumber"
                            name="phonenumber"
                            placeholder="Enter your phonenumber"
                            className="input"
                        />
                    </li>
                    <li>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input"
                        />
                    </li>
                    <li>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input"
                        />
                    </li>
                    <li>
                        <button type="submit">Submit</button>
                    </li>
                    <li>
                        <a onClick={switchToLogin} className="switch-to-create">Switch to login</a>
                    </li>
                </ul>
            </div>
            <button onClick={closeEvent} className='closeButton'><h1>x</h1></button>
        </div>
    );
};

export default CreateAccount;