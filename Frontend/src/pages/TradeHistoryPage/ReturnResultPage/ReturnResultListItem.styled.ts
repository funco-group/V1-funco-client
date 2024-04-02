import palette from "@/lib/palette";
import styled from "styled-components";

export const ReturnResultListItemDiv = styled.div<{ color: string }>`
  color: ${(props) => {
    if (props.color === "red") {
      return palette.brandRed;
    } else if (props.color === "blue") {
      return palette.brandBlue;
    }
  }};
`;
