import React from "react";
import "../Error/ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = ({ errorCode }) => {
  const goToHome = () => {
    // Implement the logic to navigate to the home page
    console.log("Navigating to home page...");
  };

  return (
    <div className="error-page">
      <h2>Error {errorCode}</h2>
      <p>Sorry, something went wrong. Please try again later.</p>
      <Link to="/home">
        <button className="btn btn-warning" onClick={goToHome}>Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
