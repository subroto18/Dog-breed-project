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
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 ">
        {data.map((image, index) => {
          return (
            <div
              onClick={() => {
                setIsModalVisible(true);
                setModalImage(image);
              }}
              key={image}
              className="rounded m-2  p-4 bg-slate-900 cursor drop-shadow-xl h-52 overflow-hidden"
            >
              <LazyLoadImage
                effect="blur"
                key={index}
                src={image}
                alt={image}
                className="img-lazy h-full w-full"
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
