import styled from "styled-components";
import palette from "@/lib/palette";

export const TabContainer = styled.div`
  /* background-color: orange; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* border-top: 1px solid ${palette.borderGray}; */
  border-bottom: 1px solid ${palette.borderGray};
`;

export const TabItemDiv = styled.div<{ $active: boolean }>`
  color: ${(props) => props.$active && palette.brandColor};
  font-family: ${(props) => (props.$active ? "NanumSquareBold" : "")};
  border-bottom: ${(props) =>
    props.$active ? `4px solid ${palette.brandColor}` : ""};
  text-align: center;
  font-size: 1rem;
  padding: 0.6rem 0;
  cursor: pointer;
`;
