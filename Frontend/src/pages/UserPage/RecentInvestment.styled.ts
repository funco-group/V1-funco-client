import styled from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";
import palette from "@/lib/palette";

export const RecentInvestmentContainer = styled.div`
  ${CommonComponent};
  padding: 0.9375rem;
`;

export const RecentInvestmentContentDiv = styled.div`
  width: 100%;
  height: calc(100% - 1.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
`;

export const RecentInvestmentRowDiv = styled.div`
  width: 100%;
  font-family: "NanumSquareBold";
  color: ${palette.brandBlack};
`;
