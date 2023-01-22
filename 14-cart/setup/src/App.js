import React, { useContext } from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import ApplicationContext from "./context";
// items

function App() {
  const { value, children } = useContext(ApplicationContext);
  console.log(value, children);
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
