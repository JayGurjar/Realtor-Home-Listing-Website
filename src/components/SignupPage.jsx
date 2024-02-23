import { React, useState } from "react";
import NavBar from "./NavBarComponent";
import "./styles/Signup.css";

const SignupPage = ({ navigate }) => {
  return (
    <div>
      <NavBar />
      <div className="background-picture">
        <div className="white-container">
          <div className="signup-header">Sign Up</div>
          <label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </label>
          <label>
            <input type="text" name="email" placeholder="Email" required />
          </label>
          <label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="repassword"
              placeholder="Re-enter Password"
              required
            />
          </label>
          <button className="submit-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
