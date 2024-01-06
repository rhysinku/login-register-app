import { useState } from "react";
import { Link } from 'react-router-dom';
import ThirdpartyLogin from '../components/ThirdpartyLogin'
import { FaEye } from "react-icons/fa6";

const  [TogglePass, setTogglePass] = useState();

const Login = () => {
    return (
        <div className="formbox">
            <form className="formcon">
               <div className="formcon__input">
               <input type="text" placeholder="Email" />
               </div>
                <div className="formcon__input">
                <input type="password" placeholder="Password" />
                <div className="formcon__input__icon" onClick={()=> (console.log('click'))}>
                <FaEye size={30}/>
                </div>

                </div>
              <span><a>Forgot Password?</a></span>
                <button className="formcon__btn">Login</button>
            </form>
            <div className="formbox__content">
            <p>Don’t have an account? <Link to='register'>Signup</Link></p>
            </div>
           <ThirdpartyLogin/>
        </div>
    );
}

export default Login;