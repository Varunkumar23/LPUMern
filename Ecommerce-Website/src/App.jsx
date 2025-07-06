import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { CategoryViewPage } from "./pages/CategoryViewPage";
import { SearchPage } from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";
import { ViewPage } from "./pages/ViewPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:productId/view" element={<ViewPage />} />
        <Route path="/category" element={<CategoryViewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<h1>Wrong Link ra Pukaaaaaaaaaaaa!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
