import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createGuide, getGuide, updateGuide } from "../Services/GuideService";

const GuideSignup = () => {
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
      getGuide(id)
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

  const saveOrUpdateGuide = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const guide = { name, email, mobile, date, password, gender };
      console.log(guide);

      if (id) {
        updateGuide(id, guide)
          .then((reponse) => {
            console.log(reponse.data);
            navigator("/Guide_List");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createGuide(guide)
          .then((response) => {
            console.log(response.data);
            navigator("/Guide_List");
          })
          .catch((error) => {
            console.error(error);
          });
      }

      // .catch((error) => {
      //   console.error("Error registering guide:", error);
      // });
    }
  };

  // function saveOrUpdateGuide(e){
  //   e.preventDefault();

  //   if (validateForm()) {

  //     const guide = { name, email, mobile, date, password, gender };
  //     console.log(guide);

  //     if(id){
  //       updateGuide(id,guide).then((response)=>{
  //         console.log(response.data);
  //         navigator("/Guide_Signup")
  //       }).catch(error=>{
  //         console.error(err)
  //       })
  //     }
  // }

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
      // Strong password validation: At least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character
      const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (strongPasswordRegex.test(password)) {
        errorsCopy.password = "";
      } else {
        errorsCopy.password =
          "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character";
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

  //Function for dynamically change of heading
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Guide Details</h2>;
    } else {
      return <h2 className="text-center">Add Guide</h2>;
    }
  }

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {/* <h2 className="text-center">Guide Registration</h2> */}
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
                ></input>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
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
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  name="mobile"
                  value={mobile}
                  className={`form-control ${
                    errors.mobile ? `is-invalid` : ``
                  }`}
                  onChange={handleMobile}
                ></input>
                {errors.mobile && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  className={`form-control ${errors.date ? `is-invalid` : ``}`}
                  onChange={handleDate}
                ></input>
                {errors.date && (
                  <div className="invalid-feedback">{errors.date}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  className={`form-control ${
                    errors.password ? `is-invalid` : ``
                  }`}
                  onChange={handlePassword}
                ></input>
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
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

                {errors.gender && (
                  <div className="invalid-feedback">{errors.gender}</div>
                )}
              </div>

              <button className="btn btn-success" onClick={saveOrUpdateGuide}>
                Submit
              </button>
              <link path=""></link>
            </form>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default GuideSignup;

