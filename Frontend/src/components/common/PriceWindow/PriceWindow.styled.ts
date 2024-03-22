import styled from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";
import palette from "@/lib/palette";

export const PriceWindowContainer = styled.div`
  ${CommonComponent}
`;

export const TabContainer = styled.div`
  /* background-color: orange; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid ${palette.borderGray};
  border-bottom: 1px solid ${palette.borderGray};
`;

export const TabItemDiv = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? palette.brandColor : "")};
  font-family: ${(props) => (props.active ? "NanumSquareBold" : "")};
  border-bottom: ${(props) =>
    props.active ? `4px solid ${palette.brandColor}` : ""};
  text-align: center;
  font-size: 1rem;
  padding: 0.6rem 0;
  cursor: pointer;
`;

export const ColumnContainer = styled.div`
  background-color: #f9fafc;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr 0.7fr 0.55fr 0.8fr;
  padding: 0.5rem 0;
`;

export const ColumnTitleDiv = styled.div`
  text-align: center;
  font-size: 0.65rem;
  font-family: "NanumSquareAcb";
  color: ${palette.brandDarkGray};
`;
