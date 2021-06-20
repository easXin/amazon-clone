import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-d9db1.cloudfunctions.net/api"
  //"http://localhost:5001/challenge-d9db1/us-central1/api", // the api cloud function url
});
export default instance;

// alive endpoint

// https://us-central1-challenge-d9db1.cloudfunctions.net/api