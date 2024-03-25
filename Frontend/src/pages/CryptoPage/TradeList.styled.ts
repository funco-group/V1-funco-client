import styled from "styled-components";
import palette from "@/lib/palette";

export const ToggleContainer = styled.div`
  padding: 0.7rem;
  display: flex;
`;

export const CircleDiv = styled.div<{ $active: boolean }>`
  width: ${(props) => (props.$active ? "5px" : "11px")};
  height: ${(props) => (props.$active ? "5px" : "11px")};
  border-radius: 50%;
  border: ${(props) =>
    props.$active ? `6px solid ${palette.brandColor}` : `3px solid #DFE1E6`};

  margin-right: 0.5rem;
`;

export const ToggleDiv = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export const ToggleText = styled.div``;

export const ColumnContainer = styled.div`
  background-color: #f9fafc;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ColumnTitleDiv = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-family: "NanumSquareAcb";
  color: ${palette.brandDarkGray};
`;

export const TradeListContainer = styled.div``;
export const NoTradeData = styled.div`
  color: #dfe1e6;
  text-align: center;
  font-size: 0.9rem;
`;
