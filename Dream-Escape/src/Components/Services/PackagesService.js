import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/packagess";

export const listPackagess = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createPackages = (packages) =>
  axios.post(REST_API_BASE_URL, packages);

export const getPackages = (packagesId) =>
  axios.get(REST_API_BASE_URL + "/" + packagesId);

// export const updatePackages = (packagesId, packages) =>
//   axios.put(REST_API_BASE_URL, +"/" + packagesId, packages);

export const updatePackages = (packagesId, packages) =>
  axios.put(REST_API_BASE_URL + "/" + packagesId, packages);

export const deletePackages = (packagesId, packages) =>
  axios.delete(REST_API_BASE_URL + "/" + packagesId);
