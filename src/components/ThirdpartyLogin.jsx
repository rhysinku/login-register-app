import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const ThirdpartyLogin = () => {
    return (
        <>
            <div className="formcon2">
            <span className="formcon2__cont">Or</span>
            <a href="" className="formcon2__btn formcon2__btn--facebook"> <FaFacebookF size={30} title="facebook" className="formcon2__btn__icon" />Login with Facebook</a>
            <a href="" className="formcon2__btn formcon2__btn--google"><FaGoogle size={30} title="google" className="formcon2__btn__icon" /> Login with Google</a>
            </div>
        </>
    );
}

export default ThirdpartyLogin;
