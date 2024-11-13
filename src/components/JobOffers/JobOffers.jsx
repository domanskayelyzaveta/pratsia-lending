import { useState } from "react";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import {
  BtnJobOffers,
  DescriptionJobOffers,
  ListItemsLobOffers,
  ListLobOffers,
  SectionJobOffers,
  SubTitleJobOffers,
  TitleJobOffers,
} from "./JobOffers.styled";
import { useTranslation } from "react-i18next";

const JobOffers = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(null);

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <SectionJobOffers>
      <TitleJobOffers>{t("aktuelleJob")}</TitleJobOffers>
      <ListLobOffers>
        {Array.from({ length: 4 }).map((_, index) => (
          <ListItemsLobOffers key={index} $isOpen={isOpen === index}>
            <BtnJobOffers onClick={() => toggleContent(index)}>
              <Svg
                style={{
                  transform:
                    isOpen === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <use href={`${sprite}#icon-chevron-bar`} />
              </Svg>
              <SubTitleJobOffers>
                {t(`aktuelleJobItem${index + 1}`)}
              </SubTitleJobOffers>
            </BtnJobOffers>

            {isOpen === index && (
              <DescriptionJobOffers>
                {t(`aktuelleJobItem${index + 1}T`)}
              </DescriptionJobOffers>
            )}
          </ListItemsLobOffers>
        ))}
      </ListLobOffers>
    </SectionJobOffers>
  );
};

export default JobOffers;
