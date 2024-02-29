import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerSignup from "./CustomerSignup";
import Tour from "../Tour/Tour";
import GuideName from "../Guide/GuideName";
const CustomerDashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Update_Customer/:id"
            element={<CustomerSignup />}
          ></Route>
          <Route path="Tour" element={<Tour />}></Route>
          <Route path="Guide_Name" element={<GuideName />}></Route>
        </Routes>
      </BrowserRouter>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <button type="button" class="btn btn-primary">
              Basic
            </button>
            <button type="button" class="btn btn-primary">
              Primary
            </button>
            <button type="button" class="btn btn-primary">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
