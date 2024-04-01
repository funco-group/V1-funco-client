import styled from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";
import palette from "@/lib/palette";

export const PriceWindowContainer = styled.div`
  ${CommonComponent}
`;

export const ColumnContainer = styled.div`
  background-color: #f9fafc;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr 0.7fr 0.55fr 0.8fr;
`;

export const ColumnTitleDiv = styled.div`
  text-align: center;
  font-size: 0.65rem;
  font-family: "NanumSquareAcb";
  color: ${palette.brandDarkGray};
`;

export const PriceItemContainer = styled.div`
  height: 66.55rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
