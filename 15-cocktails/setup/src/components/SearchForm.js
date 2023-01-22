import React, { useContext, useState, useRef, useEffect } from "react";
import { ApplicationContext, useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchInput } = useContext(ApplicationContext);
  const inputValue = useRef("");
  useEffect(() => {
    inputValue.current.focus();
  }, []);
  return (
    <div className="form-control">
      <form action="" className="search-form">
        <label htmlFor="">Search Your Favorite Cocktail</label>
        <input
          type="text"
          onChange={(e) => setSearchInput(inputValue.current.value)}
          ref={inputValue}
        />
      </form>
    </div>
  );
};

export default SearchForm;
