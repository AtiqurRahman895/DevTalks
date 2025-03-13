import React, { useState } from "react";
import "./SignInAndSignUp.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";




export default function SignInAndSignUp() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "from-wrapper " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <section className="pt-16 place-items-center">
      {/* <h2 className="text-center mb-5 text-4xl pt-5">Start your journey..</h2> */}
      <div className={containerClass} id="from-wrapper">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay bg-custom-primary">
            <div className="overlay-panel overlay-left bg-custom-primary">
              <h2>Welcome Back!</h2>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="outlineButton !rounded-full !px-6 !py-2.5 !mt-3"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right bg-custom-primary">
              <h2>Hello, Friend!</h2>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="outlineButton !rounded-full !px-6 !py-2.5 !mt-3"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
