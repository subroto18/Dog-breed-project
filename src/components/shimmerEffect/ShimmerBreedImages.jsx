import React from "react";
export const ShimmerBreedImages = () => {
  return (
    <div className="w-11/12 m-auto mt-5">
      <div className="mb-2 underline text-1xl h-8 bg-slate-900 w-[30%] ml-2 rounded"></div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {Array.apply(null, Array(12)).map((effect, index) => {
          return (
            <div
              key={index}
              className="w-full h-[10rem] border-2 border-slate-900 rounded m-2  p-4 bg-slate-900 "
            ></div>
          );
        })}
      </div>
    </div>
  );
};
