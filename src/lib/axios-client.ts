import axios from "axios";
import { toast } from "sonner";

const options = {
  // Same-origin; forwarded to the backend by the rewrite in next.config.ts
  baseURL: "/api/v1",
};

const API = axios.create(options);

API.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status >= 400 &&
    error.response.status < 500;

  const { data, status } = error.response;
  // if it's an unexpected error
  if (!expectedError) {
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject({ ...data, status }); // the error is sent to the catch block
});

export default API;
