import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import "../Customer/CustomerLogin.css";

const CustomerLogin = () => {
  return (
    <div  className="container p-5">
    <div className="row">
    <div className="col-xl-3"></div>
      <div className="col-xl-6">
      <div className="wrapper">
        <form action="">
          <h1>Customer Login</h1>
          <div className="input-box">
            <FaUserCircle className="icon" />
            <input type="email" placeholder="Username" required />
          </div>
          <div className="input-box">
            <MdPassword className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/Forgot_password"> Forgot Password</Link>{" "}
          </div>

          <button type="submit">Login</button>

          <div className="register">
            <p>
              Don't have an account ?{" "}
              <Link style={{ textDecoration: "none" }} to="/Customer_Signup">
                <a href="#">
                  Register
                </a>
              </Link>{" "}
            </p>
            <p>
             Login as {" "}
              <Link style={{ textDecoration: "none", color:"white", fontWeight:"bolder" }} to="/Guide_Login">
                <a href="#">
                 Guide
                </a>
              </Link>{" "} /
             
              <Link style={{ textDecoration: "none", color:"white",fontWeight:"bolder" }} to="/Admin_Login">
                <a href="#">
                 Admin
                </a>
              </Link>{" "}
            </p>
          </div>
        </form>
          
      </div>
      </div>
      <div className="col-xl-3"></div>
      </div>
    </div>
  );
};

export default CustomerLogin;
