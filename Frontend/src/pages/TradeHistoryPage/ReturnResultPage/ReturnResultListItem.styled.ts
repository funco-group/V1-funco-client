import palette from "@/lib/palette";
import styled from "styled-components";

export const ReturnResultListItemDiv = styled.div<{
  color: string;
  align: string;
}>`
  /* background-color: red; */
  margin: 0 0.5rem;
  color: ${(props) => {
    if (props.color === "red") {
      return palette.brandRed;
    }
    if (props.color === "blue") {
      return palette.brandBlue;
    }
    return palette.brandBlack;
  }};

  text-align: ${(props) => {
    if (props.align === "left") {
      return "left";
    }
    if (props.align === "right") {
      return "right";
    }
    return "center";
  }};

  span {
    font-size: 0.7rem;
    color: ${palette.brandDarkGray};
  }
`;

export const ReturnResultListItemContainer = styled.div`
  margin-right: 1.5rem;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
