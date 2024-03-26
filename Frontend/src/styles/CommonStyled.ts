import styled, { css } from "styled-components";
import palette from "@/lib/palette";

export const CommonComponent = css`
  border: 1px solid ${palette.deactivatedGray};
  background-color: ${palette.brandWhite};
`;

export const ColumnContainer = styled.div`
  background-color: #f9fafc;
  padding: 0.5rem 0;
`;

export const ColumnTitleDiv = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-family: "NanumSquareAcb";
  color: ${palette.brandDarkGray};
`;
