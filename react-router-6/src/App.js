import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./component/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      {/* <nav>Navbar</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>Footer</footer> */}
    </BrowserRouter>
  );
}
// * means if there is path that does not exist we will shoe error page
export default App;
