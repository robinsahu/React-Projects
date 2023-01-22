import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <section>
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
        })}
      </section>
    </main>
  );
};

export default Tours;
