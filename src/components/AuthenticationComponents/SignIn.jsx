import PageTitle from "../CommonComponents/PageTitle";
import { Link, useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { useContext, useState } from "react";
import SocialAuthButton from "./SocialAuthButton";
import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const SignIn =()=>{
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const SignInOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInUser(email, password)
      

     
      

      toast.success(
        `Sign in successful! Welcome, ${userCredential.user.displayName}!`
      );
      navigate("/");
      
      
    
      

    } catch (error) {
      toast.error(error.message ? error.message : error.code);
    }
  };

  return (
    <main className="py-16">
      <PageTitle title="Sign in" />

      <section className="container place-items-center">
        <div className="w-full max-w-[400px] sm:max-w-[800px] bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2">

          <div className="p-4 md:p-8 text-center text-black space-y-2">
            <h3 className="">Welcome back</h3>
            <SocialAuthButton/>

            <form onSubmit={(e)=>SignInOnSubmit(e)} className="space-y-4">
              <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
                <MdEmail />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="grow !bg-transparent" placeholder="Email" required/>
              </label>

              <PasswordInput password={password} setPassword={setPassword} forgotPassword={true} email={email} />

              <button type="submit" className="primaryButton !w-full">Sign In</button>
            </form>
          </div>

          {/* Sidebar */}
          <div className={`!p-4 md:!p-8 bg-custom-primary flex flex-col justify-center text-center rounded-b-lg sm:rounded-l-none sm:rounded-r-lg`}>
            <div>
              <h3 className="">Hello, Friend!</h3>
              <p className="mb-2">Don't have an Account? Start your journey with us now!</p>

              <Link to={'/sign-up'} className="outlineButton !rounded-full inline-block">
                Sign Up
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>

  );
}


export default SignIn;