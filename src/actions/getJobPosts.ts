import { JobPostType } from "../App";
import axiosClient from "../apis/apiClient";

export function getProduct() {
  return axiosClient.get<JobPostType[]>("/addNewPost");
}
