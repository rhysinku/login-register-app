import ThirdpartyLogin from '../components/ThirdpartyLogin'
import { FaEye } from "react-icons/fa6";

const Login = () => {
    return (
        <div className="formbox">
            <form className="formcon">
               <div className="formcon__input">
               <input type="text" placeholder="Email" />
               </div>
                <div className="formcon__input">
                <input type="password" placeholder="Password" />
                <FaEye size={30} className='formcon__input__icon'/>
                </div>
              <span><a>Forgot Password?</a></span>
                <button className="formcon__btn">Login</button>
            </form>
            <div className="formbox__content">
            <p>Don’t have an account? <a>Signup</a></p>
            </div>
           <ThirdpartyLogin/>
        </div>
    );
}

export default Login;