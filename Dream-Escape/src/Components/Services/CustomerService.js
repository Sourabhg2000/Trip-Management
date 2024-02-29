import axios from "axios";
import { MdPassword } from "react-icons/md";

const REST_API_BASE_URL = "http://localhost:8080/api/customers";

export const listCustomers = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createCustomer = (customer) =>
  axios.post(REST_API_BASE_URL, customer);

export const getCustomer = (customerId) =>
  axios.get(REST_API_BASE_URL + "/" + customerId);

// export const updateCustomer = (customerId, customer) =>
//   axios.put(REST_API_BASE_URL, +"/" + customerId, customer);

export const updateCustomer = (customerId, customer) =>
  axios.put(REST_API_BASE_URL + "/" + customerId, customer);

export const deleteCustomer = (customerId, customer) =>
  axios.delete(REST_API_BASE_URL + "/" + customerId);

// const onLogin = (e) => {
//   console.log(admin);

//   axios
//     .get(`http://localhost:8080/api/customers/${email}/${password}`, admin)
//     .then((response) => {
//       if (response.data) {
//         window.alert(`Welcome ${response.data.name}`);
//         navigator(`/admin/profile`, { state: { id: response.data.id } });
//       } else {
//         window.alert("Please enter your credentials");
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//       }
//     })
//     .catch((err) => {
//       window.alert("Invalid User");
//     });
// };
