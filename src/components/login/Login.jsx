import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((auth)=> {
            navigate('/');
        }) .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }

    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then((auth)=> {
            console.log(auth)
            navigate('/')
        }) .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        
    }
  
    return (
        <div className='login'>
                <Link to='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazon" className="login_logo" />
                </Link>
                <div className="login_container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target
                            .value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                        <button type='submit' onClick={signIn} className="login_signIn_button">Sign In</button>
                    </form>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad exercitationem quasi natus maiores alias ex nobis? Ratione eius maiores quam laborum perferendis fuga delectus culpa, eligendi quidem id odio illo. Itaque, non voluptas. Incidunt similique dicta doloremque soluta. Molestias architecto quae odio repudiandae ducimus commodi. Iure corporis tempore eligendi impedit.</p>
                    <button type='submit' onClick={register} className="login_ragistration_button">Create your amazon account</button>
                </div>
        </div>
    );
};

export default Login;