import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="text-sm md:text-4xl font-bold text-black">Sign in</h1>
        <div className="social-container">
          <a href="#" className="social text-blue-600 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="social text-red-600 text-2xl">
            <FaGooglePlusG />
          </a>
          <a href="#" className="social text-blue-500 text-2xl">
            <FaLinkedinIn />
          </a>
        </div>
        <span className="text-black">or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="text-black"
        />
        <a href="#" className="text-black">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
