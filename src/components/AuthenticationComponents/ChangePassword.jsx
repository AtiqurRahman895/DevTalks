import PageTitle from "../CommonComponents/PageTitle";
import { useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { useContext, useState } from "react";
import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";


const ChangePassword =()=>{
  const navigate = useNavigate();
  const { user, ChangePassword } = useContext(AuthContext);
  const [password, setPassword]=useState("")
  const [passwordError, setPasswordError]=useState(false)

  const SignInOnSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) {
        e.target.password.focus();
        return;
    }

    try {
      await ChangePassword(password)
      e.target.reset();
      navigate("/");
      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error(error.message ? error.message : error.code);
    }
  };

  return (
    <main className="py-16">
      <PageTitle title="Change password" />

      <section className="container place-items-center">
        <div className="w-full max-w-sm bg-white rounded-lg">

          <div className="p-4 md:p-8 text-black space-y-2">
            <h3 className="">Change password now!</h3>

            <form onSubmit={(e)=>SignInOnSubmit(e)} className="space-y-4">
              <label className="input p-2 bg-custom-half-gray flex items-center gap-2">
                <MdEmail />
                <input type="text" value={user.email} className="grow !bg-transparent" placeholder="Email" readOnly required/>
              </label>

              <PasswordInput password={password} setPassword={setPassword}  passwordError={passwordError} setPasswordError={setPasswordError}/>

              <button type="submit" className="primaryButton !w-full">Change</button>
            </form>
          </div>
        </div>
      </section>
    </main>

  );
}


export default ChangePassword;
