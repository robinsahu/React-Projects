import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );

  // MY WRITTEN CODE OR YOU CAN SAY LOGIC ONLY

  // const [count, setCount] = useState(0);
  // const [text, setText] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (count < 0) {
  //     setText([data[0]]);
  //   } else if (count > data.length) {
  //     setText(data);
  //   } else {
  //     // setText(
  //     //   data.map((text, index) => {
  //     //     if (index < count) return text;
  //     //   })
  //     // );
  //     setText(data.slice(0, count));
  //   }
  // };
  // return (
  //   <>
  //     <section className="section">
  //       <form action="" onSubmit={handleSubmit} className="lorem-form">
  //         <label htmlFor="">Text</label>
  //         <input
  //           type="number"
  //           name="amount"
  //           value={count}
  //           onChange={(e) => setCount(e.target.value)}
  //         />
  //         <button type="submit" className="btn">
  //           Generate
  //         </button>
  //         <article>
  //           {text.map((text, index) => {
  //             return (
  //               <>
  //                 <p>{text}</p>
  //               </>
  //             );
  //           })}
  //         </article>
  //       </form>
  //     </section>
  //   </>
  // );
}

export default App;
