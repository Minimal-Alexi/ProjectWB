import Input from './Input';
import Image from './images/image.jpeg';

const Login = ({ switchToCreate }) => {
    return (
        <div className="white-rectangle">
            <div className="invisible-rectangle">
                <img src={Image} alt='Image' className='image' />
            </div>
            <div>
                <ul className="submit-stuff">
                    <li><h1 className="login-title">Log in</h1></li>
                    <li>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email or phonenumber"
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
                        <a onClick={switchToCreate} className="switch-to-create">Don't have an account?</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;