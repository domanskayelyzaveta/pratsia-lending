// import Footer from "./components/Footer/Footer"; тест
import { Routes, Route } from "react-router-dom";

// import MainInfo from "./components/MainInfo/MainInfo";
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
