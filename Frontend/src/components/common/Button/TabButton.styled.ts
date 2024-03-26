import styled from "styled-components";
import palette from "@/lib/palette";

interface TabButtonProps {
  width: string;
  height: string;
  $active: boolean;
  radius: "left" | "right" | null;
}

const TabButton = styled.button<TabButtonProps>`
  background-color: transparent;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ $active }) => ($active ? palette.brandColor : "#999999")};
  border: ${({ $active }) =>
    $active
      ? `1px solid ${palette.brandColor}`
      : `1px solid ${palette.deactivatedGray}`};
  border-radius: ${({ radius }) => {
    if (radius === "left") {
      return "5px 0 0 5px";
    }
    if (radius === "right") {
      return "0 5px 5px 0";
    }
    return null;
  }};
`;

export default TabButton;
