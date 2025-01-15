import React from "react";
import { BestWorkerData } from "../../../Data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const TopRated = () => {
  const Workes = BestWorkerData.map((i) => {
    return (
      <div className="best-worker relative " key={i.id}>
        <LazyLoadImage src={i.img} alt="" className="w-[350px] h-[300px] " />
        <div className="best-worker-txt absolute bottom-0 p-2  bg-white w-full h- text-black ">
          <h5>{i.name}</h5>
          <h6>{i.title}</h6>
          <p>{i.desc}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col justify-center items-center p-12">
      <h2 className="text-5xl p-5">Top Rated Workers</h2>
      <div className="top-rated grid grid-cols-2  justify-center  gap-20">
        {Workes}
      </div>
    </div>
  );
};

export default TopRated;
