import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";



  const SignUp = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
      <div className="form-container">
      <form>
        <div className="form">
          <p className="loginPara">
            Sign Up to see the photos and videos <br /> from your friends.
          </p>
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
              required           
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="fname"
              id="fname"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Full Name"
              required           
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="userName"
              id="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Username"
              required           
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required           
            />
          </div>
          <p className="loginPara" style={{ fontSize: "12px" }}>
            By sigining up, you agree to out Terms ,<br /> privacy policy and
            cookies policy.
          </p>
          <input
            type="submit"
            id="submit-btn"
            value="Sign Up"
            className="submit-btn"
          />
          <Link to="/signin">
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "rgba(var(--f52,142,142,142),1)",
                textAlign: "center",
                paddingBottom: "15px",
                cursor: "default",
              }}
            >
              Already have an Account?
              <span style={{ color: "#1729eb", cursor: "pointer" }}>
                SignIn
              </span>
            </p>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
