import React, { useContext } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { ApplicationContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const { data, loading } = useContext(ApplicationContext);
  const cocktail = data?.find((item) => item.idDrink === id);
  const { strDrinkThumb, strAlcoholic, strDrink, strGlass } = cocktail;

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h2>single cocktail page </h2>
      <img src={strDrinkThumb} alt="drink" />
      <h4>{strAlcoholic}</h4>
      <h6>{strDrink}</h6>
      <p>{strGlass}</p>
      <Link to={`/`} className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default SingleCocktail;
