import styled from "styled-components";
import palette from "@/lib/palette";

export const TotalAssetContainer = styled.div`
  border-bottom: 1px solid ${palette.borderGray};
`;

export const TotalAssetInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const AssetItemContainer = styled.div<{ $top: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  border-bottom: ${(props) => props.$top && `1px solid ${palette.brandColor}`};
  margin-bottom: ${(props) => props.$top && `0.5rem`};
  padding-bottom: ${(props) => props.$top && `0.3rem`};
`;

export const AssetItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 1rem 0.5rem;
`;

export const TitleDiv = styled.div`
  /* background-color: red; */
  font-size: 0.95rem;
`;
export const DataDiv = styled.div`
  /* background-color: blue; */
  text-align: right;
  font-family: "NanumSquareBold";

  span {
    font-size: 0.75rem;
    color: ${palette.brandDarkGray};
    font-family: "NanumSquare";
  }
`;

export const ChartContainer = styled.div`
  border-left: 1px solid ${palette.borderGray};
`;
