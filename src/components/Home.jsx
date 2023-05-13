import { useContext } from "react";
import { Context } from "../context/AppContext";
import { BreedsImage } from "./BreedsImage";
import { Appbar } from "./common/Appbar";
import { BreedsCarousel } from "./common/BreedsCarousel";
import { SubBreedList } from "./SubBreedList";
import TrackDoggos from "./TrackDoggos";

export const Home = () => {
  const { selectBtnName } = useContext(Context);
  return (
    <div>
      <Appbar />
      <BreedsCarousel />
      {selectBtnName === "Boggo" ? (
        <BreedsImage />
      ) : selectBtnName === "List" ? (
        <SubBreedList />
      ) : (
        <TrackDoggos />
      )}
    </div>
  );
};
