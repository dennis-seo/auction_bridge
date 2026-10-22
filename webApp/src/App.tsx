import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";
import { DetailPage } from "./pages/DetailPage";
import { SearchPage } from "./pages/SearchPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/map/:categoryId" element={<MapPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/detail/:itemId" element={<DetailPage />} />
    </Routes>
  );
}
