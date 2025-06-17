import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";

const SpecialOffer = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-10  w-[90%] md:w-[500px] shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        >
         <RxCross1 size={20} />
        </button>
        <img
          src="https://i.ibb.co/39yy467N/Banner3.jpg" 
          alt="Special Offer"
          className="w-full h-64 rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-center text-red-600">
          🎉 Special Offer!
        </h2>
        <p className="text-gray-700 text-center">
          Get 25% OFF your first room booking. Today only!
        </p>
       <div className='flex justify-center items-center my-3'>
         <Link to={'/rooms'} onClick={onClose} className='btn text-gray-200 bg-blue-500' >Book now</Link>
       </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
