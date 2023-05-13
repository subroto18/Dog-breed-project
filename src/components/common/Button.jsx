import React, { useContext } from "react";
import AppContext, { Context } from "../../context/AppContext";

export const Button = ({ title, mr, ml, mt, mb }) => {
  const { selectBtnName, setSelectBtnName, setSelectedBreedName } =
    useContext(Context);

  const btnHandle = (title) => {
    // set the button name to the state
    setSelectBtnName(title);
  };

  return (
    <button
      onClick={() => btnHandle(title)}
      className={`bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-5 rounded ${mr} ${ml} ${mt} ${mb} ${
        selectBtnName === title && "border-2"
      }`}
    >
      {title}
    </button>
  );
};
