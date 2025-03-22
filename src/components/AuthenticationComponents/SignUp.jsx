import { useState } from "react";
import { Link } from "react-router";
import SocialAuthButton from "./SocialAuthButton";
import { MdEmail } from "react-icons/md";
import PasswordInput from "./PasswordInput";
import { FaUser } from "react-icons/fa";
import ProfileImageInput from "./ProfileImageInput";
import { toast } from "react-toastify";

const SignUp =()=>{
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [passwordError, setPasswordError]=useState(false)
  const [photoURL, setPhotoURL]=useState("")

  const CreatUserOnSubmit = (e) => {
    e.preventDefault();

    if (passwordError) {
      e.target.password.focus();
      return;
    }else if (!photoURL) {
      toast.warning("You must upload a profile image!");
      return;
    }
    console.log(name, photoURL, email, password)
    toast.success("worked!")
    
  };

  return (
    <section className="!container py-16 place-items-center">
      <div className="w-full max-w-[400px] sm:max-w-[800px] bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2">

        <div className="p-4 md:p-8 text-center text-black space-y-2">
            <h3 className="">Create account</h3>
            <SocialAuthButton />

            <form onSubmit={(e)=>CreatUserOnSubmit(e)} className="space-y-4">
                <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
                    <FaUser />
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="grow !bg-transparent" placeholder="Username" required/>
                </label>

                <ProfileImageInput image={photoURL} setImage={setPhotoURL} />

                <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
                    <MdEmail />
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="grow !bg-transparent" placeholder="Email" required/>
                </label>

                <PasswordInput password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError}/>

                <button type="submit" className="primaryButton !w-full">Sign Up</button>
            </form>
        </div>

        {/* Sidebar */}
        <div className={`p-4 md:p-8 bg-custom-primary flex flex-col justify-center text-center rounded-b-lg sm:rounded-l-none sm:rounded-r-lg`}>
          <div>
            <h3 className="">Hello, Friend!</h3>
            <p className="mb-6">Already have an Account? Sign in with your personal info now!</p>

            <Link to={'/sign-in'} className="outlineButton !rounded-full">
                Sign In
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SignUp;