import { useEffect, useRef, useState } from "react";
import sprite from "../../assets/sprite.svg";
import { Backdrop, Button, Content } from "./Modal.styled";
import { createPortal } from "react-dom";
import gsap from "gsap";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const Modal = ({ show, handleClose, children }) => {
  const modal = document.getElementById("modal");
  const contentRef = useRef(null);
  const prevShow = usePrevious(show);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (show && event.key === "Escape") {
        startClosing();
      }
    };

    document.body.style.overflow = show ? "hidden" : "auto";
    window.addEventListener("keydown", handleEscape);

    if (prevShow !== show) {
      if (show && contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.1)" }
        );
      } else if (contentRef.current && !show) {
        gsap.to(contentRef.current, {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "back.in(1.1)",
          onComplete: () => {
            setIsClosing(false);
            handleClose();
          },
        });
      }
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [show, handleClose, prevShow]);

  const startClosing = () => {
    setIsClosing(true);
    gsap.to(contentRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.in(1.1)",
      onComplete: () => {
        setIsClosing(false);
        handleClose();
      },
    });
  };

  if (!show && !isClosing) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={startClosing}>
      <Content ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <Button onClick={startClosing} type="button" aria-label="Close">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </Button>
        {children}
      </Content>
    </Backdrop>,
    modal
  );
};

export default Modal;
