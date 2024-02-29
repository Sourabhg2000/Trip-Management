import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createCustomer, getCustomer, updateCustomer } from "../Services/CustomerService";

const CustomerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    password: "",
    gender: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getCustomer(id)
        .then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
          setMobile(response.data.mobile);
          setDate(response.data.date);
          setPassword(response.data.password);
          setGender(response.data.gender);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleGender = (e) => setGender(e.target.value);

  const saveCustomer = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const customer = { name, email, mobile, date, password, gender };

      if (id) {
        updateCustomer(id, customer)
          .then((response) => {
            console.log(response.data);
            navigator("/Customer_List");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createCustomer(customer)
          .then((response) => {
            console.log(response.data);
            navigator("/Customer_List");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    // Name validation
    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }

    // Email validation
    if (email.trim()) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorsCopy.email = "";
      } else {
        errorsCopy.email = "Invalid email format";
        valid = false;
      }
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    // Mobile validation
    if (mobile.trim()) {
      if (/^\d{10}$/.test(mobile)) {
        errorsCopy.mobile = "";
      } else {
        errorsCopy.mobile = "Invalid mobile number format";
        valid = false;
      }
    } else {
      errorsCopy.mobile = "Mobile number is required";
      valid = false;
    }

    // Date validation
    if (date.trim()) {
      // You can add more specific date validation if needed
      errorsCopy.date = "";
    } else {
      errorsCopy.date = "Date of birth is required";
      valid = false;
    }

    // Password validation
    if (password.trim()) {
      if (password.length >= 8) {
        // You can add more specific password validation if needed
        errorsCopy.password = "";
      } else {
        errorsCopy.password = "Password must be at least 8 characters";
        valid = false;
      }
    } else {
      errorsCopy.password = "Password is required";
      valid = false;
    }

    // Gender validation
    if (gender.trim()) {
      // You can add more specific gender validation if needed
      errorsCopy.gender = "";
    } else {
      errorsCopy.gender = "Gender is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  // Function for dynamically changing the heading
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Customer Details</h2>;
    } else {
      return <h2 className="text-center">Add Customer</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? `is-invalid` : ``}`}
                  onChange={handleName}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? `is-invalid` : ``}`}
                  onChange={handleEmail}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  name="mobile"
                  value={mobile}
                  className={`form-control ${errors.mobile ? `is-invalid` : ``}`}
                  onChange={handleMobile}
                />
                {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  className={`form-control ${errors.date ? `is-invalid` : ``}`}
                  onChange={handleDate}
                />
                {errors.date && <div className="invalid-feedback">{errors.date}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  className={`form-control ${errors.password ? `is-invalid` : ``}`}
                  onChange={handlePassword}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Gender</label>

                <div className="form-check">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    className="form-check-input"
                    onChange={handleGender}
                  />
                  <label htmlFor="male" className="form-check-label">
                    Male
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    className="form-check-input"
                    onChange={handleGender}
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    className="form-check-input"
                    onChange={handleGender}
                  />
                  <label htmlFor="other" className="form-check-label">
                    Other
                  </label>
                </div>

                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
              </div>

              <button className="btn btn-success" onClick={saveCustomer}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CustomerSignup;
