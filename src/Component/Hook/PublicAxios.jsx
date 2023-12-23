import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://todoz-i-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
