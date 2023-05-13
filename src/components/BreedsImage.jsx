import React from "react";
import { useContext } from "react";
import { Context } from "../context/AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ShimmerBreedImages } from "./shimmerEffect/ShimmerBreedImages";
import { ShimmerApiError } from "./shimmerEffect/ShimmerApiError";
import { Modal } from "./Modal";
export const BreedsImage = () => {
  const context = useContext(Context);

  const { breedImages, selectBreedName, setIsModalVisible, setModalImage } =
    context;
  const { loading, error, data } = breedImages;

  return loading ? (
    <ShimmerBreedImages />
  ) : error ? (
    <ShimmerApiError />
  ) : (
    <div className="w-11/12 m-auto mt-5">
      <h1 className="mb-2 underline text-1xl">
        Breed <span className="font-bold">"{selectBreedName}"</span> image:
        click any one to view full image
      </h1>
      <div className="flex flex-wrap">
        {data.map((image, index) => {
          return (
            <div
              onClick={() => {
                setIsModalVisible(true);
                setModalImage(image);
              }}
              key={image}
              className="w-[15.2rem] h-[10rem] border-2 border-slate-900 rounded m-2  p-4 bg-slate-900 cursor"
            >
              <LazyLoadImage
                key={index}
                src={image}
                alt={image}
                className="img-lazy w-full h-full"
              />
            </div>
          );
        })}
      </div>

      {/* show modal when click on breed image */}
      <Modal />
    </div>
  );
};
