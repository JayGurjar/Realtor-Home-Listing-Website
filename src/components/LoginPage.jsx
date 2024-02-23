import { React, useState } from "react";
import NavBar from "./NavBarComponent";
import "./styles/Signup.css";
import "./styles/Login.css";

const LoginPage = ({ navigate }) => {
  return (
    <div>
      <NavBar />
      <div className="background-picture">
        <div className="white-container-two">
          <div className="signup-header">Login</div>
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
          <div className="no-acc">
            Don't have an account?{" "}
            <a href="http://localhost:8000/signup">Signup Here</a>
          </div>
          <button className="submit-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
