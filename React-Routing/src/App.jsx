import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { AboutPage } from "./pages/AboutPage";
import { BrowserRouter,Routes,Route } from "react-router";


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/ >} />
    <Route path="/search" element={<SearchPage/ >} />
    <Route path="/about" element={<AboutPage/ >} />
    <Route path="*" element={<h1>Link wrong ra Pukaaaaaaaaaa!</h1>} />
   </Routes>
  </BrowserRouter>
  )
}

export default App
