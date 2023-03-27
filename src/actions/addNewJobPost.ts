import { JobPostType } from "../App";
import axiosClient from "../apis/apiClient";

export const addNewJobPost = (data: JobPostType) => {
  return axiosClient.post("/addNewPost", JSON.stringify(data));
};
