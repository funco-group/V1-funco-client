import styled from "styled-components";
import palette from "@/lib/palette";

export const ToggleContainer = styled.div`
  padding: 1rem 0.7rem;
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

export const ToggleText = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
`;

export const ColumnGridDiv = styled.div<{ $conclude: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$conclude
      ? "6rem 6rem 9rem 8rem"
      : "5.5rem 6rem 7.2rem 7.1rem 3.5rem;"};
`;

export const TradeListContainer = styled.div`
  height: 30.55rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

export const NoTradeData = styled.div`
  color: #dfe1e6;
  text-align: center;
  font-size: 0.9rem;
  /* background-color: red; */
  position: relative;
  top: 14rem;
`;
