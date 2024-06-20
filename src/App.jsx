import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import BtnGoUp from "./components/BtnGoUp/BtnGoUp";

const Hero = lazy(() => import("./components/Hero/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const ForCompanies = lazy(() =>
  import("./components/ForCompanies/ForCompanies")
);
const ForApplicants = lazy(() =>
  import("./components/ForApplicants/ForApplicants")
);
const Industries = lazy(() => import("./components/Industries/Industries"));
const JobOffers = lazy(() => import("./components/JobOffers/JobOffers"));
const Appointment = lazy(() => import("./components/Appointment/Appointment"));
const AppointmentForm = lazy(() =>
  import("./components/AppointmentForm/AppointmentForm")
);
const Location = lazy(() => import("./components/Location/Location"));
const ImpressumPage = lazy(() => import("./Pages/ImpressumPage/ImpressumPage"));
const DatenschutzerklärungPage = lazy(() =>
  import("./Pages/DatenschutzerklärungPage/DatenschutzerklärungPage")
);
const Footer = lazy(() => import("./components/Footer/Footer"));
const DataCompany = lazy(() => import("./components/DataCompany/DataCompany"));
const Header = lazy(() => import("./components/Header/Header"));

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
