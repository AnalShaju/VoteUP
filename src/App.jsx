import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TrendingPage from "./pages/TrendingPage";
import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </>
  );
}

export default App;
