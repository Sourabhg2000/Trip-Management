import React, { useEffect, useState } from "react";
import { deletePackages, listPackagess} from "../Services/PackagesService";
import { useNavigate } from "react-router-dom";

const PackagesList = () => {
  const [packagess, setPackagess] = useState([]);

  useEffect(() => {
    getAllPackagess();
  }, []);

  function getAllPackagess() {
    listPackagess()
      .then((response) => {
        setPackagess(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const navigate = useNavigate();

  //Dynamically changing page headings
  function updatePackages(id) {
    navigate(`/Update_Packages/${id}`);
  }

  function addNewPackages() {
    navigate(`/Add_Packages`);
  }

  function updatePackages(id) {
    navigate(`/Update_Packages/${id}`);
  }

  function removePackages(id) {
    console.log(id);

    deletePackages(id)
      .then((response) => {
        getAllPackagess();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="container">
      <h2 className="text-center">List of Packages</h2>
      <button className="btn btn-primary mb-2" onClick={addNewPackages}>
        Add Packages
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
            <th>State</th>
            <th>Country</th>
            <th>Date</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packagess.map((packages) => (
            <tr key={packages.id}>
              <td>{packages.id}</td>
              <td>{packages.name}</td>
              <td>{packages.description}</td>
              <td>{packages.duration}</td>
              <td>{packages.price}</td>
              <td>{packages.state}</td>
              <td>{packages.country}</td>
              <td>{packages.date}</td>
              <td>{packages.availibility}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updatePackages(packages.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removePackages(packages.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackagesList;
