import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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
    const { name, email, password } = state;
    alert(
      `You are signed up with name: ${name}, email: ${email}, and password: ${password}`
    );

    setState({ name: "", email: "", password: "" });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="text-black text-sm md:text-4xl font-bold">Create Account</h1>
        <div className="social-container flex gap-4">
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
        <span className="text-black">or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="text-black"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="text-black"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="text-black"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
