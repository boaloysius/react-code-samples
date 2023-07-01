import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCarousel from "./pages/PageCarousel";
import HomePage from "./pages/Home";
import PageSimpleUseContext from "./pages/PageSimpleUseContext";
import PageAdvancedUseContext from "./pages/PageAdvancedUseContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="carousel" element={<PageCarousel />} />
        <Route path="context-api" element={<PageSimpleUseContext />} />
        <Route path="context-api-hooks" element={<PageAdvancedUseContext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
