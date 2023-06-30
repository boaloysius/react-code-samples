import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCarousel from "./pages/PageCarousel";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="carousel" element={<PageCarousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
