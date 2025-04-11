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
import img_wishlist from '../../assets/img-wishlist.gif';

const SignIn =()=>{
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const SignInOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInUser(email, password)
      navigate("/");
      Swal.fire({
          position: "center",
          timer: 5000,
          imageUrl: img_wishlist,  
          imageWidth: 800,     
          imageHeight: 400,    
          imageAlt: "Eid Mubarak",
          showConfirmButton: false,
          width: '850px',      
              
          customClass: {
            popup: 'rounded-xl', // Rounded corners for popup
            image: 'object-cover' // Ensures image fits nicely
          }
      })
      toast.success(
        `Sign in successful! Welcome, ${userCredential.user.displayName}!`
      );
    } catch (error) {
      toast.error(error.message ? error.message : error.code);
    }
  };

  const SignInAsUser = async () => {

    try {
      const userCredential = await signInUser("emonhassan895@gmail.com", "1aA@1a")
      navigate("/");
      Swal.fire({
          position: "center",
          timer: 5000,
          imageUrl: img_wishlist,  
          imageWidth: 800,     
          imageHeight: 400,    
          imageAlt: "Eid Mubarak",
          showConfirmButton: false,
          width: '850px',      
              
          customClass: {
            popup: 'rounded-xl', // Rounded corners for popup
            image: 'object-cover' // Ensures image fits nicely
          }
      })
      toast.success(
        `Sign in successful! Welcome, ${userCredential.user.displayName}!`
      );
    } catch (error) {
      toast.error(error.message ? error.message : error.code);
    }
  };

  const SignInAsAdmin = async () => {

    try {
      const userCredential = await signInUser("test.admin@devtalks.com", "1aA@1a")
      navigate("/");
      Swal.fire({
          position: "center",
          timer: 5000,
          imageUrl: img_wishlist,  
          imageWidth: 800,     
          imageHeight: 400,    
          imageAlt: "Eid Mubarak",
          showConfirmButton: false,
          width: '850px',      
              
          customClass: {
            popup: 'rounded-xl', // Rounded corners for popup
            image: 'object-cover' // Ensures image fits nicely
          }
      })
      toast.success(
        `Sign in successful! Welcome, ${userCredential.user.displayName}!`
      );
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

            <div className="divider !my-5 before:bg-black after:bg-black before:h-[1px] after:h-[1px] ">OR</div>

            <h5 className="">Quick Access for Recruiters & Testers</h5>

            <div className="flex items-center gap-4">
              <button onClick={SignInAsUser} type="submit" className="outlineButton !text-custom-primary hover:bg-custom-half-primary !border-custom-primary !w-full">As ordinary user</button>
              <button onClick={SignInAsAdmin} type="submit" className="outlineButton !text-custom-primary hover:bg-custom-half-primary !border-custom-primary !w-full">As admin user</button>
            </div>


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