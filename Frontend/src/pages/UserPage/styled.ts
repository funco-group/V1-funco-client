import styled, { css } from "styled-components";
import palette from "@/lib/palette";

const ColumnLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`;

export const ComponentTitleH3 = styled.h3`
  padding: 0 0 10px 0;
  margin: 0;
  border-bottom: 1px solid ${palette.deactivatedGray};
  height: 1.25rem;
`;

export const UserLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 25rem 12rem 13rem;
  grid-row-gap: 1rem;
`;

export const UserLayoutFirstRowDiv = styled.div`
  ${ColumnLayout}
`;

export const UserLayoutSecondRowDiv = styled.div`
  ${ColumnLayout}
`;
