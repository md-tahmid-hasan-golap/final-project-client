import axios from "axios";
const axiusSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiusCecure = () => {
  return axiusSecure;
};

export default UseAxiusCecure;
