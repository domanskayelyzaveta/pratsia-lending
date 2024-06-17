import React from "react";
import { DataLink, DataSectionDiv } from "./DataCompany.styled";

const DataCompany = () => {
  return (
    <DataSectionDiv>
      <DataLink>Impressum</DataLink>
      <DataLink>Datenschutzerklärung</DataLink>
    </DataSectionDiv>
  );
};

export default DataCompany;
