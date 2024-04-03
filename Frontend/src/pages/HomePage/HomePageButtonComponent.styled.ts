import styled from "styled-components";
import palette from "@/lib/palette";

export const HomePageButton = styled.button<{
  direction: string;
  margin: string;
}>`
  width: 25rem;
  img {
    width: 20px;
    height: 20px;
    margin: ${({ direction }) =>
      direction === "left" ? "0 0 50px 50px" : "0 50px 50px 0"};
  }

  margin: ${({ margin }) => margin};
  text-align: ${({ direction }) => (direction === "left" ? "right" : "left")};
`;

export const HomePageButtonFlexDiv = styled.div<{ direction: string }>`
  display: flex;
  justify-content: ${({ direction }) =>
    direction === "left" ? "right" : "left"};
`;

export const HomePageButtonTitleDiv = styled.div`
  color: ${palette.mainColor2};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const HomePageButtonContentDiv = styled.div`
  color: ${palette.brandColor};
  font-size: 1rem;
`;
