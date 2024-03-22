import styled, { keyframes, css } from "styled-components";
import palette from "@/lib/palette";

export const PriceItemContainer = styled.div`
  /* background-color: yellow; */
  display: grid;
  grid-template-columns: 0.2fr 0.8fr 0.7fr 0.55fr 0.8fr;
  /* text-align: center; */
  /* padding: 0.7rem 0.3rem; */
  padding: 0 0.3rem;
  height: 3.5rem;
  border-bottom: 1px solid ${palette.borderGray};
`;
export const StarIconDiv = styled.div`
  /* background-color: red; */
  padding: 0 0.5rem;
  display: flex;
`;

export const NameDiv = styled.div`
  /* background-color: blue; */
  margin: auto 0;
  text-align: left;
  padding: 0 0.2rem;
  font-family: "NanumSquareBold";
`;
export const KorNameDiv = styled.div`
  font-size: 0.8rem;
`;

export const CodeDiv = styled.div`
  color: ${palette.brandDarkGray};
  font-size: 0.65rem;
  margin-top: 0.1rem;
`;

export const PriceDiv = styled.div<{ isDown: boolean }>`
  /* background-color: green; */
  /* height: 3.5rem; */
  /* line-height: 3.5rem; */
  font-family: "NanumSquareBold";
  font-size: 0.8rem;
  text-align: right;
  color: ${(props) => (props.isDown ? "#1876d2" : "#c94930")};
  margin: auto 0;
`;

const flashAnimation = (updatedDown: boolean) => keyframes`
  from { border: 1.5px solid ${updatedDown ? "#1876d2" : "#c94930"}; }
  /* to { border: none; } */
`;

export const UpdateDiv = styled.div<{
  updated: boolean;
  updatedDown: boolean;
}>`
  /* background-color: red; */
  padding: 0 0.2rem;
  height: 2.5rem;
  line-height: 2.5rem;
  ${(props) =>
    props.updated &&
    css`
      animation: ${flashAnimation(props.updatedDown)} 1s;
    `}
`;

export const ChangeDiv = styled.div<{ isDown: boolean }>`
  /* background-color: orange; */
  font-size: 0.75rem;
  margin: auto 0;
  text-align: right;
  color: ${(props) => (props.isDown ? "#1876d2" : "#c94930")};
`;
export const ChangeRateDiv = styled.div``;
export const ChangePriceDiv = styled.div``;
export const TradePriceDiv = styled.div`
  /* background-color: pink; */
  font-size: 0.75rem;
  display: flex;
  justify-content: flex-end;
  margin: auto 0;
  padding: 0 0.2rem;
`;
export const UnitDiv = styled.div`
  color: #b3b3b4;
`;
