import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/guides";

export const listGuides = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createGuide = (guide) => axios.post(REST_API_BASE_URL, guide);

export const getGuide = (guideId) =>
  axios.get(REST_API_BASE_URL + "/" + guideId);

// export const updateGuide = (guideId, guide) =>
//   axios.put(REST_API_BASE_URL, +"/" + guideId, guide);

export const updateGuide = (guideId, guide) =>
  axios.put(REST_API_BASE_URL + "/" + guideId, guide);

export const deleteGuide = (guideId, guide) =>
  axios.delete(REST_API_BASE_URL + "/" + guideId);
