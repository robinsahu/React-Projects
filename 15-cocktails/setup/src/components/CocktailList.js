import React, { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { ApplicationContext } from "../context";

const CocktailList = () => {
  const { data, loading } = useContext(ApplicationContext);
  console.log(data);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h1>Cocktail List</h1>
      {data.map((cocktail) => {
        return (
          <div className="cocktail">
            <Cocktail cocktail={cocktail} />
          </div>
        );
      })}
    </div>
  );
};

export default CocktailList;
