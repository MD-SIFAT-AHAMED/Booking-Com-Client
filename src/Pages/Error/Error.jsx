import React from "react";
import error from "../../assets/error.jpg";
import { Link } from "react-router";
const Error = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img className="h-[400px]" src={error} alt="errorImg" />
        <Link to={"/"}>
          <p className="btn text-white bg-blue-500">Back to home</p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
