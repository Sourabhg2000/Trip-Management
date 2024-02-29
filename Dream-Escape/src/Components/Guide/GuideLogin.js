import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import "../Guide/GuideLogin.css";
import { Outlet, Link } from "react-router-dom";

const GuideLogin = () => {
  return (
    <div  className="container p-5">
    <div className="row">
    <div className="col-xl-3"></div>
      <div className="col-xl-6">
    <div className="wrapper">
      <form action="">
        <h1>Guide Login</h1>
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
            Remember me{" "}
          </label>
          <Link to="/GuideLogin"> Forgot Password</Link>
          {/* <a href="/GuideLogin"> Forgot Password</a> */}
        </div>

        <button type="submit">Login</button>

        {/* <div className='register'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div> */}
      </form>
        </div>
      </div>
      <div className="col-xl-3"></div>
      </div>
    </div>
    
  );
};
export default GuideLogin;
