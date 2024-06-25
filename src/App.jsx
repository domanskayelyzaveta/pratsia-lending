import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import BtnGoUp from "./components/BtnGoUp/BtnGoUp";
import Loader from "./components/Loader/Loader";
import "./i18n";
import Animation from "./components/Animation/Animation";
import gsap from "gsap";
import Modal from "./components/Modal/Modal";
import ModalLangSwitch from "./components/Modal/ModalLangSwitch/ModalLangSwitch";

const Hero = React.lazy(() => import("./components/Hero/Hero"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const ForCompanies = React.lazy(() =>
  import("./components/ForCompanies/ForCompanies")
);
const ForApplicants = React.lazy(() =>
  import("./components/ForApplicants/ForApplicants")
);
const Appointment = React.lazy(() =>
  import("./components/Appointment/Appointment")
);
const AppointmentForm = React.lazy(() =>
  import("./components/AppointmentForm/AppointmentForm")
);
const Location = React.lazy(() => import("./components/Location/Location"));
const ImpressumPage = React.lazy(() =>
  import("./Pages/ImpressumPage/ImpressumPage")
);
const DatenschutzerklärungPage = React.lazy(() =>
  import("./Pages/DatenschutzerklärungPage/DatenschutzerklärungPage")
);
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const DataCompany = React.lazy(() =>
  import("./components/DataCompany/DataCompany")
);
const Header = React.lazy(() => import("./components/Header/Header"));

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const [showModal, setShowModal] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (isAnimationComplete && mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: "100vh" },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          onComplete: () => {
            gsap.set(mainContentRef.current, {
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              clearProps: "all",
            });
          },
        }
      );
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
  }, [isAnimationComplete]);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

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
      });

      const handleScroll = () => {
        if (window.pageYOffset === targetOffset) {
          window.removeEventListener("scroll", handleScroll);
          event.target.blur();
        }
      };

      window.addEventListener("scroll", handleScroll);
    }
  };

  return (
    <>
      {!isAnimationComplete ? (
        <Animation onComplete={handleAnimationComplete} />
      ) : (
        <React.Suspense fallback={<Loader />}>
          <Header
            handleSetActiveLink={handleSetActiveLink}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <div ref={mainContentRef}>
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
                      <Hero handleSetActiveLink={handleSetActiveLink} />
                      <AboutUs handleSetActiveLink={handleSetActiveLink} />
                      <ForCompanies />
                      <ForApplicants
                        handleSetActiveLink={handleSetActiveLink}
                      />
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
          </div>
        </React.Suspense>
      )}

      {showModal && (
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <ModalLangSwitch
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </Modal>
      )}
    </>
  );
};

export default App;
