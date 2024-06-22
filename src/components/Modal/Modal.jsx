import { useEffect } from "react";
import sprite from "../../assets/sprite.svg";
import { Backdrop, Button, Content } from "./Modal.styled";
import { createPortal } from "react-dom";

const Modal = ({ show, handleClose, children }) => {
  const modal = document.getElementById("modal");

  useEffect(() => {
    const handleEscape = (event) => {
      if (show && event.key === "Escape") {
        handleClose();
      }
    };
    document.body.style.overflow = show ? "hidden" : "auto";
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show || modal === null) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Button onClick={handleClose}>
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
