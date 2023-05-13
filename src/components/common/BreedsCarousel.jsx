import axios from "axios";
import { Fragment } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getBreedImagesByName, getBreedList } from "../../api/performApi";
import { Context } from "../../context/AppContext";
import { ShimmerApiError } from "../shimmerEffect/ShimmerApiError";
import { ShimmerBreedsCarousel } from "../shimmerEffect/ShimmerBreedsCarousel";

export const BreedsCarousel = () => {
  const context = useContext(Context);

  const {
    breeds,
    breedsDispatch,
    selectBreedName,
    setSelectedBreedName,
    breedImagesDispatch,
    setSelectBtnName,
  } = context;

  const { loading, error, data } = breeds;

  useEffect(() => {
    performApi();
  }, []);

  const performApi = async () => {
    breedsDispatch({
      type: "BREEDS_LOADING_API",
    });

    let result = await getBreedList("/breeds/list/all"); // fetch breed list

    if (Boolean(result)) {
      breedsDispatch({
        // after fetching api data , store it into contaxt state
        type: "BREEDS_API_SUCCESS",
        payload: {
          data: result,
        },
      });

      let breenName = Object.entries(result)[0][0];

      // get all image by breed name
      PerformBreedImageApiByName(breenName);
    } else {
      breedsDispatch({
        type: "BREED_IMAGE_API_FAILED",
        payload: {
          errMsg: "Something went wrong!",
        },
      });
    }
  };

  const PerformBreedImageApiByName = async (breenName) => {
    //set breedname to state for fetching all images
    setSelectedBreedName(breenName);

    // select doggos button when click to any breeds name
    setSelectBtnName("Boggo");

    breedImagesDispatch({
      type: "BREED_IMAGE_API_LOADING",
    });

    let result = await getBreedImagesByName(`/breed/${breenName}/images`); // fetch breed list

    if (Boolean(result)) {
      breedImagesDispatch({
        // after fetching api data , store it into contaxt state
        type: "BREED_IMAGE_API_SUCCESS",
        payload: {
          data: result,
        },
      });
    } else {
      breedImagesDispatch({
        type: "BREED_IMAGE_API_FAILED",
        payload: {
          errMsg: "Something went wrong!",
        },
      });
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return loading ? (
    <ShimmerBreedsCarousel />
  ) : error ? (
    <ShimmerApiError />
  ) : (
    <Carousel responsive={responsive} className="mt-5 w-11/12 m-auto">
      {Object.keys(data).map((name, index) => {
        return (
          <div
            key={name}
            className="cursor-pointer"
            onClick={() => PerformBreedImageApiByName(name)}
          >
            <div
              className={`bg-slate-900 p-5 text-white text-center mr-5 rounded  mr-5 ${
                name === selectBreedName && "border-2 border-red-600"
              }`}
            >
              <div className="flex items-center justify-center">
                <p className="text-2xl ml-4 font-bold text-center">{name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
