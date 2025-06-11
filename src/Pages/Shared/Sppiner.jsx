import React from "react";
import Lottie from "lottie-react";
import airplane from '../../assets/lottie/sppiner.json';
const Sppiner = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto flex justify-center items-center">
      <div className="w-64 h-64">
        <Lottie animationData={airplane} loop={true} />
      </div>
    </div>
  );
};

export default Sppiner;
