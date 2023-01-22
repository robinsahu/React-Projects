import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadmore] = useState(false);

  return (
    <>
      <div>
        <article className="single-tour">
          <img src={image} alt={name} />
          <footer>
            <div className="tour-info">
              <h4>{name}</h4>
              <h4 className="tour-price">${price}</h4>
            </div>
            <p>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button onClick={() => setReadmore(!readMore)}>
                {readMore ? "Show Less" : "Read More"}
              </button>
            </p>
            <button className="delete-btn" onClick={() => removeTour(id)}>
              Not Interesed
            </button>
          </footer>
        </article>
      </div>
    </>
  );
};

export default Tour;
