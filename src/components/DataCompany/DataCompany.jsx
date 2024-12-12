import React from "react";
import { DataLink, DataSectionDiv } from "./DataCompany.styled";
import { Link } from "react-router-dom";

const DataCompany = () => {
  return (
    <DataSectionDiv>
      <DataLink as={Link} to="/impressum">
        Impressum
      </DataLink>
      <DataLink as={Link} to="/datenschutzerklarung">
        Datenschutzerklärung
      </DataLink>
      <DataLink as={Link} to="/agb">
        AGB
      </DataLink>
    </DataSectionDiv>
  );
};

export default DataCompany;
