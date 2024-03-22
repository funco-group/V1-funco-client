import styled, { css } from "styled-components";

const ColumnLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`;

export const ComponentTitleH3 = styled.h3`
  padding: 0;
  margin: 0;
`;

export const UserLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 20rem 12rem 13rem;
  grid-row-gap: 1rem;
`;

export const UserLayoutFirstRowDiv = styled.div`
  background-color: blue;
  ${ColumnLayout}
`;

export const UserLayoutSecondRowDiv = styled.div`
  background-color: green;
  ${ColumnLayout}
`;

export const UserLayoutThirdRowDiv = styled.div`
  background-color: gray;
`;
