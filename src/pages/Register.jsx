import ThirdpartyLogin from '../components/ThirdpartyLogin'
import { FaEye } from "react-icons/fa6";
const Register = () => {
    return (
        <>  
        <div className="formbox">
        <form className="formcon">

        <div className="formcon__box">
            
            <div className="formcon__input">
            <input type="text" placeholder="First Name" />
            </div>

            <div className="formcon__input">
            <input type="text" placeholder="Last Name" />
            </div>

        </div>


           <div className="formcon__input">
           <input type="text" placeholder="Email" />
           </div>
            <div className="formcon__input">
            <input type="password" placeholder="Create Password" />
            </div>
            <div className="formcon__input">
            <input type="password" placeholder="Confirm Password" />
            <FaEye size={30} className='formcon__input__icon'/>
            </div>
          <span><a>Forgot Password?</a></span>
            <button className="formcon__btn">Signup</button>
        </form>
        <div className="formbox__content">
        <p>Already have an account? <a>Login</a></p>
        </div>
       <ThirdpartyLogin/>
    </div>
            
        </>
    );
}

export default Register;
