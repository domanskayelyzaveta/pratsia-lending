import { createPortal } from "react-dom";
// import { useMediaQuery } from "react-responsive";
import {
  BntClose,
  ModalMenuWrapper,
  StyledLinkA,
  SvgMenu,
} from "./HeaderMenu.styled";
import sprite from "../../../assets/sprite.svg";

const modalRoot = document.getElementById("modal");

const HeaderMenu = ({ onClose, handleSetActiveLink }) => {
  // const isMobileAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });

  return createPortal(
    <ModalMenuWrapper>
      <BntClose type="button" onClick={() => onClose()}>
        <SvgMenu style={{ fill: "var(--blue-200)" }}>
          <use href={`${sprite}#icon-close`}></use>
        </SvgMenu>
      </BntClose>

      <StyledLinkA
        href="#starseite"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("starseite", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-arrow`}></use>
        </SvgMenu>
        Starseite
      </StyledLinkA>
      <StyledLinkA
        href="#überUns"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("überUns", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-chat`}></use>
        </SvgMenu>
        Über uns
      </StyledLinkA>
      <StyledLinkA
        href="#unternehemen"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("unternehemen", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-people`}></use>
        </SvgMenu>
        Für Unternehmen
      </StyledLinkA>
      <StyledLinkA
        href="#bewerber"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("bewerber", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-person-check`}></use>
        </SvgMenu>
        Für Bewerber
      </StyledLinkA>
      <StyledLinkA
        href="#interviewtermin"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("interviewtermin", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-file-text`}></use>
        </SvgMenu>
        Interviewtermin
      </StyledLinkA>
      <StyledLinkA
        href="#kontakt"
        onClick={(e) => {
          onClose();
          handleSetActiveLink("kontakt", e);
        }}
      >
        <SvgMenu>
          <use href={`${sprite}#icon-telephone`}></use>
        </SvgMenu>
        Kontakt
      </StyledLinkA>
    </ModalMenuWrapper>,
    modalRoot
  );
};

export default HeaderMenu;
