import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.js";
import Decent from "../pages/decent.js"
import Nice from "../../src/pages/nice.js"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/decent" element={<Decent/>} />
      <Route path="/nice" element={<Nice/>} />
    </Routes>
  );
};

export default AppRoutes;
