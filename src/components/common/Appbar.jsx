import React from "react";
import { Button } from "./Button";

export const Appbar = () => {
  return (
    <div className="bg-slate-800 py-3">
      <div className="flex justify-between w-11/12 m-auto">
        <div>
          <Button title="Boggo" />
        </div>
        <div>
          <Button title="List" />
          <Button title="Track" ml="ml-5" />
        </div>
      </div>
    </div>
  );
};
