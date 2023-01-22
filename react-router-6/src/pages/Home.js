import { Link, Outlet } from "react-router-dom";
// import Navbar from "../component/navbar";

const Home = ({ user }) => {
  return (
    <>
      <section className="section">
        <h2>Home Page</h2>
        <p>{user?.name}</p>
      </section>
    </>
  );
};
export default Home;
