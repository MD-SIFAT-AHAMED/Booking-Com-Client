import React from "react";

const HeaderSection = ({ title, subtitle }) => {
  return (
    <div className="my-8">
      <h2 className="text-center text-secondary md:text-2xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600 text-xs md:text-sm md:w-3/5 text-center mx-auto">{subtitle}</p>}
    </div>
  );
};

export default HeaderSection;
