import { useState, useReducer, createContext } from "react";
import Api from "../api/Api";
import {
  breedImagesIntialState,
  breedImagesReducer,
} from "../utils/breedImagesReducer";
import { breedReducer, breedsIntialState } from "../utils/breedsReducer";
import {
  subBreedRandomImageIntialState,
  subBreedRandomImageReducer,
} from "../utils/subBreedRandomImageReducer";
import {
  subBreedsIntialState,
  subBreedsReducer,
} from "../utils/subBreedsReducer";
export const Context = createContext();

const AppContext = (props) => {
  const [selectBtnName, setSelectBtnName] = useState("Boggo"); // select  button on the top nav bar
  const [selectBreedName, setSelectedBreedName] = useState(""); // select breed name after clicking from breeds carousel
  const [isModalVisible, setIsModalVisible] = useState(false); // modal is closed by default
  const [modalImage, setModalImage] = useState(""); // set breed image when click on any breed image

  const [breeds, breedsDispatch] = useReducer(breedReducer, breedsIntialState); // all breed list
  const [breedImages, breedImagesDispatch] = useReducer(
    breedImagesReducer,
    breedImagesIntialState
  ); // all image of particular breed

  const [subBreeds, subBreedsDispatch] = useReducer(
    subBreedsReducer,
    subBreedsIntialState
  ); // all sub breeds

  const [subBreedRandomImage, subBreedRandomImageDispatch] = useReducer(
    subBreedRandomImageReducer,
    subBreedRandomImageIntialState
  ); // random image of particular sub breeds

  return (
    <Context.Provider
      value={{
        selectBtnName,
        setSelectBtnName,
        breeds,
        breedsDispatch,
        selectBreedName,
        setSelectedBreedName,
        breedImages,
        breedImagesDispatch,
        isModalVisible,
        setIsModalVisible,
        modalImage,
        setModalImage,
        subBreeds,
        subBreedsDispatch,
        subBreedRandomImage,
        subBreedRandomImageDispatch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
