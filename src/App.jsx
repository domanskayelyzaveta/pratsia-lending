import AboutUs from "./components/AboutUs/AboutUs";
import ForApplicants from "./components/ForApplicants/ForApplicants";
import ForCompanies from "./components/ForCompanies/ForCompanies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  const handleSetActiveLink = (link, event) => {
    event.preventDefault();
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      event.target.blur();
    }
  };

  return (
    <>
      <Header handleSetActiveLink={handleSetActiveLink} />
      <main>
        <Hero />
        <AboutUs />
        <ForCompanies />
        <ForApplicants />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
