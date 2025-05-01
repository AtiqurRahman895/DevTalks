import PageTitle from "../CommonComponents/PageTitle";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import SocialAuthButton from "./SocialAuthButton";
import { MdEmail } from "react-icons/md";
import PasswordInput from "./PasswordInput";
import { FaUser } from "react-icons/fa";
import ProfileImageInput from "./ProfileImageInput";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useNormalAxios from "../../Hooks/useNormalAxios";
import QuickAccess from "./QuickAccess";

const SignUp =()=>{
  const navigate = useNavigate();
  const { signOutUser, creatUser, updateUserProfile } = useContext(AuthContext);
  const normalAxios= useNormalAxios()

  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [passwordError, setPasswordError]=useState(false)
  const [photoURL, setPhotoURL]=useState("")

  const CreatUserOnSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) {
      e.target.password.focus();
      return;
    }else if (!photoURL) {
      toast.warning("You must upload a profile image!");
      return;
    }
    console.log(name, photoURL, email, password,)
    try {
      await creatUser(email, password);
      toast.success("Your Sign up successfull!");
      await updateUserProfile(name, photoURL);

      await normalAxios.post("/users/addUser", { name, photoURL, email });
      signOutUser();
      navigate("/sign-in");
    } catch (error) {
      toast.error(error.message ? error.message : error.code);
    }
    
  };

  return (
    <main className="py-16">
      <PageTitle title="Sign up" />

      <section className="container place-items-center">
        <div className="w-full max-w-[400px] sm:max-w-[800px] bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2">

          <div className="p-4 md:p-8 text-center text-black space-y-2">
              <h3 className="mb-5">Create account</h3>

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
              <p className="pt-2">Already have an Account? <Link to={'/sign-in'} className="font-bold text-custom-primary hover:underline">Sign Up</Link></p>

              <SocialAuthButton />

          </div>

          {/* Sidebar */}
          <QuickAccess />

        </div>
      </section>
    </main>
  );
}

export default SignUp;