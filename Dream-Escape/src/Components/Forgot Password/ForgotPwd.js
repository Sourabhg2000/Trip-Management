import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
// import "../Guide/GuideLogin.css";

const ForgotPwd = () => {
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>Enter your registered email address</h1>
          <div className="input-box">
            <FaUserCircle className="icon" />
            <input type="email" placeholder="Username" required />
          </div>
          {/* <div className="input-box">
            <MdPassword className="icon" />
            <input type="password" placeholder="Password" required />
          </div> */}

          {/* <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <a href="#"> Forgot Password</a>
          </div> */}

          <button type="submit">Submit</button>

          <div className="register">
            <p>
              Don't have an account ? <Link to="/Customer_Signup" style={{textDecoration:"none"}}>Register</Link>
            </p>
          </div>
        </form>
          
      </div>
    </div>
  );
};

export default ForgotPwd;
