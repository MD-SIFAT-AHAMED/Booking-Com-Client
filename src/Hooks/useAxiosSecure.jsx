import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const AxiosInstance = axios.create({
  baseURL: "https://booking-com-server-murex.vercel.app",
});
const useAxiosSecure = () => {
  const { user, userSignOut } = useAuth();

  AxiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  AxiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        userSignOut()
          .then(() => {
            // console.log("Sign out user for 401 status code");
          })
          .catch(() => {
            // console.log(err);
          });
      }
    }
  );

  return AxiosInstance;
};

export default useAxiosSecure;
