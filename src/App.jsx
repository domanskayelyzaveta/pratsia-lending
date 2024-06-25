import React, {
  // Suspense,
  lazy,
  useState,
  useEffect,
  useRef,
} from "react";
import { Route, Routes } from "react-router-dom";
import BtnGoUp from "./components/BtnGoUp/BtnGoUp";
// import Loader from "./components/Loader/Loader";
import "./i18n";
import Animation from "./components/Animation/Animation";
import gsap from "gsap";
import Modal from "./components/Modal/Modal";
import ModalLangSwitch from "./components/Modal/ModalLangSwitch/ModalLangSwitch";

const Hero = lazy(() => import("./components/Hero/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const ForCompanies = lazy(() =>
  import("./components/ForCompanies/ForCompanies")
);
const ForApplicants = lazy(() =>
  import("./components/ForApplicants/ForApplicants")
);
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
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const [showModal, setShowModal] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (isAnimationComplete) {
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
        <>
          {/* <Suspense fallback={<Loader />}> */}
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
                      <Hero />
                      <AboutUs />
                      <ForCompanies />
                      <ForApplicants />
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
          {/* </Suspense> */}

          <Modal show={showModal} handleClose={() => setShowModal(false)}>
            <ModalLangSwitch
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default App;
