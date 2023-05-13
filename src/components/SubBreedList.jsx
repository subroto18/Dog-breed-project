import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { getSubBreedByName } from "../api/performApi";
import { Context } from "../context/AppContext";
import { Modal } from "./Modal";
import { ShimmerApiError } from "./shimmerEffect/ShimmerApiError";

export const SubBreedList = () => {
  const {
    selectBreedName,
    subBreeds,
    subBreedsDispatch,
    subBreedRandomImageDispatch,
    setIsModalVisible,
    setModalImage,
  } = useContext(Context);

  const { loading, error, data } = subBreeds;

  useEffect(() => {
    PerformSubBreedsApiByName();
  }, [selectBreedName]);

  const PerformSubBreedsApiByName = async () => {
    subBreedsDispatch({
      type: "SUB_BREED_API_LOADING",
    });

    let result = await getSubBreedByName(`/breed/${selectBreedName}/list`); // fetch sub breed list

    if (Boolean(result)) {
      subBreedsDispatch({
        // after fetching api data , store it into contaxt state
        type: "SUB_BREEDS_API_SUCCESS",
        payload: {
          data: result,
        },
      });
    } else {
      subBreedsDispatch({
        type: "SUB_BREEDS_API_FAILED",
        payload: {
          errMsg: "Something went wrong!",
        },
      });
    }
  };

  const performSubBreedRandomApiByName = async (subBreed) => {
    // open the modal
    setIsModalVisible(true);

    subBreedRandomImageDispatch({
      type: "SUB_BREED_RANDOM_IMAGE_API_LOADING",
    });

    let result = await getSubBreedByName(
      `/breed/${selectBreedName}/${subBreed}/images/random`
    ); // fetch sub breed list

    if (Boolean(result)) {
      subBreedRandomImageDispatch({
        // after fetching api data , store it into contaxt state
        type: "SUB_BREED_RANDOM_IMAGE_API_SUCCESS",
        payload: {
          data: result,
        },
      });

      // set image to the modal

      setModalImage(result);
    } else {
      subBreedRandomImageDispatch({
        type: "SUB_BREED_RANDOM_IMAGE_API_FAILED",
        payload: {
          errMsg: "Something went wrong!",
        },
      });
    }
  };

  return loading ? (
    <></>
  ) : error ? (
    <ShimmerApiError />
  ) : (
    <div className="w-11/12 m-auto mt-2">
      <p className="underline font-bold mb-2">
        {" "}
        Breed "{selectBreedName}" Sub-breeds{" "}
      </p>

      <div
        className="bg-slate-600
      rounded px-2 py-1 text-white "
      >
        <span>Sub-Breed</span>
        <span>Open 1 Image (Modal)</span>
      </div>
      <div>
        {data.length > 0 ? (
          <>
            {data.map((name, index) => {
              return (
                <h1 key={name} className="flex justify-between w-12/12 p-2">
                  <span>{name}</span>
                  <span
                    className="cursor-pointer underline"
                    onClick={() => performSubBreedRandomApiByName(name)}
                  >
                    Link
                  </span>
                </h1>
              );
            })}
          </>
        ) : (
          <div className="bg-slate-500 mt-5 p-5 text-center">
            <h1 className="font-bold text-white py-5">
              No Sub breed found for "{selectBreedName}"
            </h1>
          </div>
        )}
      </div>
      <Modal />
    </div>
  );
};
