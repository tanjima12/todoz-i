import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5007",
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
