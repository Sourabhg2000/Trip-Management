// import React, { useEffect, useState } from "react";
// import { listCustomers } from "../Services/CustomerService";
// import { useNavigate } from "react-router-dom";

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     listCustomers()
//       .then((response) => {
//         setCustomers(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const navigate = useNavigate();

//   //Dynamically changing page headings
//   function updateCustomer(id) {
//     navigate(`/Update_Customer/${id}`);
//   }

//   return (
//     <div className="container">
//       <h2 className="text-center">List of Customers</h2>
//       <table className="table table-striped table-bordered">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email Id</th>
//             <th>Mobile Number</th>
//             <th>Date of Birth</th>
//             <th>Password</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer) => (
//             <tr key={customer.id}>
//               <td>{customer.id}</td>
//               <td>{customer.name}</td>
//               <td>{customer.email}</td>
//               <td>{customer.mobile}</td>
//               <td>{customer.date}</td>
//               <td>{customer.password}</td>
//               <td>{customer.gender}</td>
//               <td>
//                 <button
//                   className="btn btn-info"
//                   onClick={() => updateCustomer(customer.id)}
//                 >
//                   Update
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomerList;


import React, { useEffect, useState } from "react";
import { deleteCustomer, listCustomer, listCustomers } from "../Services/CustomerService";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers();
  }, []);

  function getAllCustomers() {
    listCustomers()
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const navigate = useNavigate();

  //Dynamically changing page headings
  function updateCustomer(id) {
    navigate(`/Update_Customer/${id}`);
  }

  function addNewCustomer() {
    navigate(`/Customer_Signup`);
  }

  function updateCustomer(id) {
    navigate(`/Update_Customer/${id}`);
  }

  function removeCustomer(id) {
    console.log(id);

    deleteCustomer(id)
      .then((response) => {
        getAllCustomers()
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Customers</h2>
      <button className="btn btn-primary mb-2" onClick={addNewCustomer}>
        Add Customer
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            <th>Date of Birth</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.mobile}</td>
              <td>{customer.date}</td>
              <td>{customer.password}</td>
              <td>{customer.gender}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateCustomer(customer.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCustomer(customer.id)}
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

export default CustomerList;
