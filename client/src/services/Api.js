import axios from "axios";
// used to settings up some type of connectors to hit the backend
export default () => {
  return axios.create({
    baseURL: "http://localhost:8081/"
  });
};
