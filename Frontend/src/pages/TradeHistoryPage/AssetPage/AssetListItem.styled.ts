import styled from "styled-components";
import palette from "@/lib/palette";

export const AssetItemDiv = styled.div<{ align: string; color: string }>`
  display: flex;
  align-items: center;
  color: ${(props) => {
    if (props.color === "red") {
      return palette.brandRed;
    }
    if (props.color === "blue") {
      return palette.brandBlue;
    }
    return palette.brandBlack;
  }};

  justify-content: ${(props) => {
    if (props.align === "left") {
      return "left";
    }
    if (props.align === "right") {
      return "right";
    }
    return "center";
  }};

  img {
    margin-right: 0.4rem;
  }

  span {
    font-size: 0.7rem;
    color: ${(props) => {
      if (props.color === "red") {
        return palette.brandRed;
      }
      if (props.color === "blue") {
        return palette.brandBlue;
      }
      return palette.brandDarkGray;
    }};
  }
`;

export const ListItemContainerDiv = styled.div`
  /* background-color: red; */
  margin-left: 1.5rem;
`;
