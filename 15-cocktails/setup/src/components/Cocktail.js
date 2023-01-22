import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  console.log(cocktail);
  const { strGlass, strAlcoholic, strDrinkThumb, strDrink, idDrink } = cocktail;
  return (
    <div>
      <img src={strDrinkThumb} alt="drink" />
      <h4>{strAlcoholic}</h4>
      <h6>{strDrink}</h6>
      <p>{strGlass}</p>
      <Link to={`cocktail/${idDrink}`} className="btn">
        Details
      </Link>
    </div>
  );
};

export default Cocktail;
