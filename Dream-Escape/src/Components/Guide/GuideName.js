import React, { useEffect, useState } from "react";
import { deleteGuide, listGuides } from "../Services/GuideService";
import { useNavigate } from "react-router-dom";
const GuideName = () => {
    const [guides, setGuides] = useState([]);

  useEffect(() => {
    getAllGuides();
  }, []);

  function getAllGuides() {
    listGuides()
      .then((response) => {
        setGuides(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const navigate = useNavigate();

  //Dynamically changing page headings
  function updateGuide(id) {
    navigate(`/Update_Guide/${id}`);
  }

  function addNewGuide() {
    navigate(`/Guide_Signup`);
  }

  function updateGuide(id) {
    navigate(`/Update_Guide/${id}`);
  }

  function removeGuide(id) {
    console.log(id);

    deleteGuide(id)
      .then((response) => {
        getAllGuides()
      })
      .catch((error) => {
        console.error(error);
      });
  }

    return (
        <div>
             <div className="container p-5">
      <h2 className="text-center p-3">List of Available Guides</h2>
      {/* <button className="btn btn-primary mb-2" onClick={addNewGuide}>
        Add Guide
      </button> */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            {/* <th>Date of Birth</th>
            <th>Password</th> */}
            <th>Gender</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {guides.map((guide) => (
            <tr key={guide.id}>
              <td>{guide.id}</td>
              <td>{guide.name}</td>
              <td>{guide.email}</td>
              <td>{guide.mobile}</td>
              {/* <td>{guide.date}</td>
              <td>{guide.password}</td> */}
              <td>{guide.gender}</td>
              {/* <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateGuide(guide.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeGuide(guide.id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            
        </div>
    )
}

export default GuideName
