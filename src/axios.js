import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-mybackend.herokuapp.com",
});

export default instance;
