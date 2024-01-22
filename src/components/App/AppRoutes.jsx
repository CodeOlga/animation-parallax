import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import TourPage from "../Tour/TourPage";
import TracksPage from "../Tracks/TracksPage";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/tour" element={<TourPage />} />
    <Route path="/tracks" element={<TracksPage />} />
  </Routes>
)

export default AppRoutes;