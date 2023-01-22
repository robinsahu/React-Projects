import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import StyledNavbar from "./StyledNavbar";
const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      {/* <Navbar /> */}
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;
