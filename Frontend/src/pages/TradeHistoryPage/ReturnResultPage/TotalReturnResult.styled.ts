import styled from "styled-components";
import palette from "@/lib/palette";

export const TotalReturnDateContainer = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${palette.borderGray};

  select {
    margin-left: 1rem;
    padding: 0.7rem;
    border: 1px solid ${palette.deactivatedGray};
    border-radius: 5px;
    color: #999999;
  }
`;
export const DateDiv = styled.div`
  font-size: 0.9rem;
  font-family: "NanumSquareBold";
`;

export const DateSetDiv = styled.div`
  display: flex;
`;

export const ResultContainer = styled.div`
  border-bottom: 1px solid ${palette.borderGray};
`;

export const ResultItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const ResultItemDiv = styled.div<{ $right: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 1rem 0;
  border-right: ${(props) => props.$right && `1px solid ${palette.brandColor}`};
`;

export const TitleDiv = styled.div``;
export const DataDiv = styled.div<{ $red: boolean }>`
  font-family: "NanumSquareBold";
  color: ${(props) => props.$red && palette.brandRed};
  span {
    font-size: 0.75rem;
    color: ${palette.brandDarkGray};
    font-family: "NanumSquare";
  }
`;
