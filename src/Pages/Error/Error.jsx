import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-6" />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to={"/"}>
        <p className="btn text-white bg-primary">Back to home</p>
      </Link>
    </div>
  );
};

export default Error;
