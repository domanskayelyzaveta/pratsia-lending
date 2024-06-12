import { createPortal } from "react-dom";
import { useMediaQuery } from "react-responsive";
import { ModalMenuWrapper, StyledLinkA, SvgMenu } from "./HeaderMenu.styled";
import sprite from "../../../assets/sprite.svg";

const modalRoot = document.getElementById("modal");

const HeaderMenu = ({ onClose, handleSetActiveLink }) => {
  const isMobileAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });

  return createPortal(
    <ModalMenuWrapper>
      <StyledLinkA
        href="#home"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("home", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-arrow`}></use>
        </SvgMenu>
        Starseite
      </StyledLinkA>
      <StyledLinkA
        href="#aboutUs"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("contact", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-chat`}></use>
        </SvgMenu>
        Über uns
      </StyledLinkA>
      <StyledLinkA
        href="#forCompanies"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("forCompanies", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-people`}></use>
        </SvgMenu>
        Für Unternehmen
      </StyledLinkA>
      <StyledLinkA
        href="#forApplicants"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("forApplicants", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-person-check`}></use>
        </SvgMenu>
        Für Bewerber
      </StyledLinkA>
      <StyledLinkA
        href="#appointment"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("appointment", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-file-text`}></use>
        </SvgMenu>
        Interviewtermin
      </StyledLinkA>
      <StyledLinkA
        href="#contact"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("contact", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-telephone`}></use>
        </SvgMenu>
        Kontakt
      </StyledLinkA>
      <button
        type="button"
        onClick={() => onClose()}
        style={{ width: "20px", height: "10px" }}
      >
        <svg
          name="icon-close"
          stroke={"var(--primary-black)"}
          //   width={isMobile ? 40 : 70}
        />
      </button>
    </ModalMenuWrapper>,
    modalRoot
  );
};

export default HeaderMenu;
