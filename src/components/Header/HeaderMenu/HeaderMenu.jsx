import { createPortal } from "react-dom";
import {
  Backdrop,
  BntClose,
  ModalContainer,
  ModalMenuWrapper,
  StyledLinkA,
  SvgMenu,
} from "./HeaderMenu.styled";
import sprite from "../../../assets/sprite.svg";
import { useTranslation } from "react-i18next";

const modalRoot = document.getElementById("modal");

const HeaderMenu = ({ onClose, handleSetActiveLink }) => {
  const { t } = useTranslation();

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalMenuWrapper>
          <BntClose type="button" onClick={onClose}>
            <SvgMenu style={{ fill: "var(--blue-200)" }}>
              <use href={`${sprite}#icon-close`} />
            </SvgMenu>
          </BntClose>

          <StyledLinkA
            href="#starseite"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              handleSetActiveLink("starseite", e);
            }}
          >
            <SvgMenu>
              <use href={`${sprite}#icon-arrow`} />
            </SvgMenu>
            {t("nav.menuStart")}
          </StyledLinkA>
          <StyledLinkA
            href="#überUns"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              handleSetActiveLink("überUns", e);
            }}
          >
            <SvgMenu>
              <use href={`${sprite}#icon-chat`} />
            </SvgMenu>
            {t("nav.menuAboutUs")}
          </StyledLinkA>
          <StyledLinkA
            href="#unternehemen"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              handleSetActiveLink("unternehemen", e);
            }}
          >
            <SvgMenu>
              <use href={`${sprite}#icon-people`} />
            </SvgMenu>
            {t("nav.menuForCompanies")}
          </StyledLinkA>
          <StyledLinkA
            href="#bewerber"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              handleSetActiveLink("bewerber", e);
            }}
          >
            <SvgMenu>
              <use href={`${sprite}#icon-person-check`} />
            </SvgMenu>
            {t("nav.menuForApp")}
          </StyledLinkA>
          <StyledLinkA
            href="#interviewtermin"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              handleSetActiveLink("interviewtermin", e);
            }}
          >
            <SvgMenu>
              <use href={`${sprite}#icon-file-text`} />
            </SvgMenu>
            {t("nav.menuAppointment")}
          </StyledLinkA>
          <StyledLinkA
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              handleSetActiveLink("kontakt", e);
            }}
          >
            <SvgMenu>
              <use href={`${sprite}#icon-telephone`} />
            </SvgMenu>
            {t("nav.menuContact")}
          </StyledLinkA>
        </ModalMenuWrapper>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default HeaderMenu;
