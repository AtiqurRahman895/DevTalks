import { Link } from "react-router";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import SocialAuthButton from "./SocialAuthButton";
import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";

const SignIn =()=>{
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const SignInOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
    toast.success("worked!")
  };

  return (
    <section className="!container py-16 place-items-center">
      <div className="w-full max-w-[400px] sm:max-w-[800px] bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2">

        <div className="p-4 md:p-8 text-center text-black space-y-2">
          <h3 className="">Welcome back</h3>
          <SocialAuthButton/>

          <form onSubmit={(e)=>SignInOnSubmit(e)} className="space-y-4">
            <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
              <MdEmail />
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="grow !bg-transparent" placeholder="Email" required/>
            </label>

            <PasswordInput password={password} setPassword={setPassword} forgotPassword={true} />

            <button type="submit" className="primaryButton !w-full">Sign In</button>
          </form>
        </div>

        {/* Sidebar */}
        <div className={`p-4 md:p-8 bg-custom-primary flex flex-col justify-center text-center rounded-b-lg sm:rounded-l-none sm:rounded-r-lg`}>
          <div>
            <h3 className="">Hello, Friend!</h3>
            <p className="mb-6">Don't have an Account? Start your journey with us now!</p>

            <Link to={'/sign-up'} className="outlineButton !rounded-full">
              Sign Up
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}


export default SignIn;