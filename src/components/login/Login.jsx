import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className='login'>
                <Link to='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazon" className="login_logo" />
                </Link>
                <div className="login_container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type="text" name="" id="" />
                        <h5>Password</h5>
                        <input type="password" name="" id="" />
                        <button className="login_signIn_button">Sign In</button>
                    </form>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad exercitationem quasi natus maiores alias ex nobis? Ratione eius maiores quam laborum perferendis fuga delectus culpa, eligendi quidem id odio illo. Itaque, non voluptas. Incidunt similique dicta doloremque soluta. Molestias architecto quae odio repudiandae ducimus commodi. Iure corporis tempore eligendi impedit.</p>
                    <button className="login_ragistration_button">Create your amazon account</button>
                </div>
        </div>
    );
};

export default Login;