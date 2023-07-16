import React, { useState } from "react";
import logo from "../Images/signin2.jpg";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin">
      <div className="inner-div">
        <div className="logo-image">
          <img className="signin-logo" src={logo} alt="logo" />
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </div>
        <input type="submit" id="submit-btn2" value="Sign In" />
        <Link to="/signup">
          <p
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "rgba(var(--f52,142,142,142),1)",
              textAlign: "center",
              padding: "0px 20px 15px 20px",
              cursor: "default",
            }}
          >
            Don't have an Account?
            <span style={{ color: "#1729eb", cursor: "pointer" }}>SignUp</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
