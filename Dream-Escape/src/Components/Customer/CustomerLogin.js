import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import "../Customer/CustomerLogin.css";

const CustomerLogin = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onchangeEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  }

  const onchangePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  }

  const onLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      window.alert('Please enter all fields');
      return;
    }

    axios.get(`http://localhost:8080/admin/verify/${email}/${password}`)
      .then((response) => {
        if (response.data) {
          window.alert(`Welcome ${response.data.firstName}`);
          nav('/admin/profile', { state: { id: response.data.id }});
        } else {
          window.alert('Please enter correct credentials');
          setEmail('');
          setPassword('');
        }
      })
      .catch(() => {
        window.alert('Invalid user');
      });
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-xl-3"></div>
        <div className="col-xl-6">
          <div className="wrapper">
            <form>
              <h1>Customer Login</h1>
              <div className="input-box">
                <FaUserCircle className="icon" />
                <input
                  type="email"
                  placeholder="Username"
                  required
                  value={email}
                  onChange={onchangeEmail}
                />
              </div>
              <div className="input-box">
                <MdPassword className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={onchangePassword}
                />
              </div>

              <div className="remember-forget">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/Forgot_password"> Forgot Password</Link>{" "}
              </div>

              <button type="submit" onClick={onLogin}>Login</button>

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
                  <Link style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }} to="/Guide_Login">
                    <a href="#">
                      Guide
                    </a>
                  </Link>{" "} /
                  <Link style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }} to="/Admin_Login">
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
