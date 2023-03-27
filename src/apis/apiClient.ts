import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://642090c382bea25f6d039a30.mockapi.io`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
