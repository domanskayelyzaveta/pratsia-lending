import { useState, useEffect } from "react";
import sprite from "../../assets/sprite.svg";
import { Button } from "./BtnGoUp.styled";

const BtnGoUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          type="button"
          aria-label="scroll up"
          className="container"
        >
          <svg width="32" height="32">
            <use href={`${sprite}#icon-arrow-up`} />
          </svg>
        </Button>
      )}
    </>
  );
};

export default BtnGoUp;
