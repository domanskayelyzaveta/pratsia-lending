// import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

// import MainInfo from "./components/MainInfo/MainInfo";
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/HomePage/AboutUsPage/AboutUsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      {/* Footer может быть добавлен здесь, если это необходимо */}
    </>
  );
};

export default App;
