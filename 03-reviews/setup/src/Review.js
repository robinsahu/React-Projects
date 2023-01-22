import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  console.log(people);
  const [index, setIndex] = useState(0);

  const handlePrevButton = () => {
    if (index === 0) setIndex(people.length - 1);
    else setIndex(index - 1);
  };
  const handleNextButton = () => {
    if (index === people.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={people[index].image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevButton}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextButton}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">Surprise Me</button>
    </article>
  );
};

export default Review;
