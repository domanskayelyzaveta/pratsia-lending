import React from "react";
import { Route, Routes } from "react-router-dom";
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
import ImpressumPage from "./Pages/ImpressumPage/ImpressumPage";
import DatenschutzerklärungPage from "./Pages/DatenschutzerklärungPage/DatenschutzerklärungPage";
import BtnGoUp from "./components/BtnGoUp/BtnGoUp";

const App = () => {
  const handleSetActiveLink = (link, event) => {
    event.preventDefault();
    const section = document.getElementById(link);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      let targetOffset;
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        targetOffset = rect.top + scrollTop - 40;
      } else if (screenWidth <= 1440) {
        targetOffset = rect.top + scrollTop - 50;
      } else {
        targetOffset = rect.top + scrollTop - 60;
      }

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
        onComplete: () => {
          event.target.blur();
        },
      });
    }
  };

  return (
    <>
      <Header handleSetActiveLink={handleSetActiveLink} />
      <main>
        <Routes>
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route
            path="/datenschutzerklarung"
            element={<DatenschutzerklärungPage />}
          />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <ForCompanies />
                <ForApplicants />
                <Industries />
                <JobOffers />
                <Appointment />
                <AppointmentForm />
                <Location />
              </>
            }
          />
        </Routes>
        <BtnGoUp />
      </main>
      <Footer />
      <DataCompany />
    </>
  );
};

export default App;
