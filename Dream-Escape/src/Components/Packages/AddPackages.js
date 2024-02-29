import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createPackages,
  getPackages,
  updatePackages,
} from "../Services/PackagesService";

const AddPackages = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [availibility, setAvailibility] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    duration: "",
    price: "",
    state: "",
    country: "",
    date: "",
    availibility: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getPackages(id)
        .then((response) => {
          setName(response.data.name);
          setDescription(response.data.description);
          setDuration(response.data.duration);
          setPrice(response.data.price);
          setState(response.data.state);
          setCountry(response.data.country);
          setDate(response.data.date);
          setAvailibility(response.data.availibility);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleDuration = (e) => setDuration(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleState = (e) => setState(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleAvailibility = (e) => setAvailibility(e.target.value);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      description: "",
      duration: "",
      price: "",
      state: "",
      country: "",
      date: "",
      availibility: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Add similar checks for other fields

    setErrors(newErrors);
    return valid;
  };

  const saveOrUpdatePackages = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Form is not valid
      return;
    }

    const newPackage = {
      name,
      description,
      duration,
      price,
      state,
      country,
      date,
      availibility,
    };

    if (id) {
      updatePackages(id, newPackage)
        .then((response) => {
          console.log("Update Response:", response.data);
          alert("Package updated successfully");
          navigator("/Packages_List");
        })
        .catch((error) => {
          console.error("Update Error:", error);
          alert("Error updating package. Please check the console for details.");
        });
    } else {
      createPackages(newPackage)
        .then((response) => {
          console.log("Create Response:", response.data);
          alert("Package added successfully");
          navigator("/Packages_List");
        })
        .catch((error) => {
          console.error("Create Error:", error);
          alert("Error adding package. Please check the console for details.");
        });
    }
  };

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Package Details</h2>;
    } else {
      return <h2 className="text-center">Add Package</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-12">
          {pageTitle()}
          <div className="card-body">
            <form>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        placeholder="Enter package name"
                        name="name"
                        value={name}
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        onChange={handleName}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </td>
                    <td>
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        placeholder="Enter package description"
                        name="description"
                        value={description}
                        className={`form-control ${
                          errors.description ? "is-invalid" : ""
                        }`}
                        onChange={handleDescription}
                      />
                      {errors.description && (
                        <div className="invalid-feedback">
                          {errors.description}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">Duration</label>
                      <input
                        type="text"
                        placeholder="Enter package duration"
                        name="duration"
                        value={duration}
                        className={`form-control ${
                          errors.duration ? "is-invalid" : ""
                        }`}
                        onChange={handleDuration}
                      />
                      {errors.duration && (
                        <div className="invalid-feedback">
                          {errors.duration}
                        </div>
                      )}
                    </td>
                    <td>
                      <label className="form-label">Price</label>
                      <input
                        type="text"
                        placeholder="Enter package price"
                        name="price"
                        value={price}
                        className={`form-control ${
                          errors.price ? "is-invalid" : ""
                        }`}
                        onChange={handlePrice}
                      />
                      {errors.price && (
                        <div className="invalid-feedback">{errors.price}</div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        placeholder="Enter state"
                        name="state"
                        value={state}
                        className={`form-control ${
                          errors.state ? "is-invalid" : ""
                        }`}
                        onChange={handleState}
                      />
                      {errors.state && (
                        <div className="invalid-feedback">{errors.state}</div>
                      )}
                    </td>
                    <td>
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        placeholder="Enter country"
                        name="country"
                        value={country}
                        className={`form-control ${
                          errors.country ? "is-invalid" : ""
                        }`}
                        onChange={handleCountry}
                      />
                      {errors.country && (
                        <div className="invalid-feedback">{errors.country}</div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">Date</label>
                      <input
                        type="date"
                        placeholder="Enter date"
                        name="date"
                        value={date}
                        className={`form-control ${
                          errors.date ? "is-invalid" : ""
                        }`}
                        onChange={handleDate}
                      />
                      {errors.date && (
                        <div className="invalid-feedback">{errors.date}</div>
                      )}
                    </td>
                    <td>
                      <label className="form-label">Availability</label>
                      <input
                        type="text"
                        placeholder="Enter availability"
                        name="availibility"
                        value={availibility}
                        className={`form-control ${
                          errors.availibility ? "is-invalid" : ""
                        }`}
                        onChange={handleAvailibility}
                      />
                      {errors.availibility && (
                        <div className="invalid-feedback">
                          {errors.availibility}
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* <div className="form-check">
                <input
                  type="checkbox"
                  required
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                  required
                >
                  I agree to all terms and conditions of Dream Escape Tours and Travels.
                </label>
              </div> */}

              <button
                className="btn btn-success"
                onClick={saveOrUpdatePackages}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AddPackages;
