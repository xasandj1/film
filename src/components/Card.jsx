import React from "react";

const Card = ({img, title, text, num,col}) => {
  return (
    <div className={`relative ${col} cursor-pointer overflow-hidden sm:h-auto h-[200px]`}>
      <img
        src={img}
        className="card-img sm:h-auto w-full h-full"
        alt={title}
      />
      <div className="flex flex-col absolute sm:top-20 top-10 md:top-28  left-0 text-center right-0" >
        <h3 className="font-bold text-white sm:text-3xl text-[30px] xl:text-6xl  family">{title}</h3>
        <p className="leading-6 text-white text-sm xl:text-2xl font-normal sm:text-lg md:text-base ">
          {text} <span className="text-xl lg:text-3xl  font-normal">{num}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
