import AboutUs from "./components/AboutUs/AboutUs";
import Appointment from "./components/Appointment/Appointment";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import DataCompany from "./components/DataCompany/DataCompany";
import Footer from "./components/Footer/Footer";

import ForApplicants from "./components/ForApplicants/ForApplicants";
import ForCompanies from "./components/ForCompanies/ForCompanies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Industries from "./components/Industries/Industries";
import JobOffers from "./components/JobOffers/JobOffers";
import Location from "./components/Location/Location";

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
        <Industries />
        <JobOffers />
        <Appointment />
        <AppointmentForm />
        <Location />
      </main>
      <Footer />
      <DataCompany />
    </>
  );
};

export default App;
