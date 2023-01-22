import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const ApplicationContext = React.createContext();

const ApplicationProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("a");
  const [loading, setLoading] = useState(false);
  const fetchCocktail = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${url}${searchInput}`);
      const { drinks } = await res.json();
      if (drinks.length) {
        setData(drinks);
        setLoading(false);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCocktail();
  }, [searchInput]);
  return (
    <ApplicationContext.Provider value={{ data, setSearchInput, loading }}>
      {children}
    </ApplicationContext.Provider>
  );
};
// make sure use

export { ApplicationContext, ApplicationProvider };
