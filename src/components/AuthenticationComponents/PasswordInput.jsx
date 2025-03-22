import { useState } from "react";
import { Link } from "react-router";
import { ImKey } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({password, setPassword, forgotPassword, passwordError, setPasswordError}) => {
      const [showPassword, setShowPassword]=useState(false)

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(!forgotPassword){
            const regex =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,20}$/;
            if (!regex.test(e.target.value)) {
                e.target.classList.add("invalid");
                setPasswordError(true);
            } else {
                e.target.classList.remove("invalid");
                setPasswordError(false);
            }
        }
      };

    //   const handlePasswordChange=(e)=>{
    //     setPassword(e.target.value)
    //     if (!forgotPassword){
    //         verifyPassword(e)
    //     }
    //   }

    return (
        <div className="text-justify">
            <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
                <ImKey />
                <input id="password" type={showPassword?"text":"password"} value={password} onChange={(e)=>handlePasswordChange(e)} className="grow !bg-transparent" placeholder="Password" required/>
                {(password && !showPassword)&&<FaEyeSlash onClick={()=>setShowPassword(true)} className="text-lg"/>}
                {(password && showPassword)&&<FaEye onClick={()=>setShowPassword(false)} className="text-lg"/>}
            </label>
            {
                (passwordError && !forgotPassword) &&
                <label htmlFor="password" className="label">
                    <p className="text-red-600">
                        Password must Be 6 to 20 characters long, Include at least
                        one digit (0-9), one lowercase letter (a-z), one uppercase
                        letter (A-Z) and one special character (@#$%^&*!)
                    </p>
                </label>
            }
            {
                (forgotPassword) &&
                <Link to={'forgot-password'} className="hover:text-custom-primary hover:underline">Forgot password?</Link>
            }
            
        </div>
    );
};

export default PasswordInput;