import React, { useEffect, useState } from "react";
import { deletePackages, listPackagess} from "../Services/PackagesService";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/india.png";
const Tour = () => {
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

  function updatePackages(id) {
    navigate(`/Update_Packages/${id}`);
  }

  function addNewPackages() {
    navigate(`/Add_Packages`);
  }

  function removePackages(id) {
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
      <h2 className="text-center
p-5">Available  Packages</h2>
      {/* <button className="btn btn-primary mb-2" onClick={addNewPackages}>
        Add Packages
      </button> */}
      <div className="card-container  p-3">
        {packagess.map((packages) => (
          <div key={packages.id} className="card mb-3">
            <div className="row"  style={{background:'grey', color:"white",boxShadow:"10px 10px 10px black"}}>
              <div className="col-xl-6">
            <img
              src={logo} // Assuming you have an "imageUrl" field in your package data
              className="card-img-top p-3" 
              style={{width:"70%"}}
              alt={packages.name}
            />
             </div>
             <div className="col-xl-6">
            <div className="card-body">
              <h5 className="card-title">{packages.name}</h5>
              <p className="card-text">Description: {packages.description}</p>
              <p className="card-text">Duration: {packages.duration} days</p>
              <p className="card-text">Price: {packages.price}</p>
              <p className="card-text">Location: {packages.state}, {packages.country}</p>
              <p className="card-text">Start Date: {packages.date}</p>
              <p className="card-text">Availability: {packages.availibility}</p>
              <div className="btn-group">
                <button
                  className="btn btn-info"
                  // onClick={() => updatePackages(packages.id)}
                >
                Add Tour
                </button>
               
              </div>
            </div>
            </div>
            </div>
         
          </div>
        ))}
      </div>
    </div>
    );
}

export default Tour


// <div>
// <div className='container pt-4'>
// <div className='row'>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
// </div>
// <div className='row mt-4'>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
//    <div className='col-xl-3' style={{marginleft: "5px"}}>
//    <div class="card">
// <img src={logo} class="card-img-top" alt="Card1"/>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//    </div>
// </div>
// </div>   
// </div>