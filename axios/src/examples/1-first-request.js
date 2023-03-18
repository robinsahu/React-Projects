import { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const response2 = await fetch(url);
      const response3 = await response2.json();

      console.log(response.data);
      console.log({ response2 });
      // const response = await fetch(url);
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
