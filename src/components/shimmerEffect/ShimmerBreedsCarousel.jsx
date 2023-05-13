import React from "react";

export const ShimmerBreedsCarousel = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-2 w-11/12 m-auto mt-2">
      {Array.apply(null, Array(3)).map((effect, index) => {
        return (
          <div
            key={index}
            className="bg-slate-900 p-5 text-white text-center mr-5 rounded border-2 border-indigo-600 h-[5rem]"
          ></div>
        );
      })}
    </div>
  );
};
