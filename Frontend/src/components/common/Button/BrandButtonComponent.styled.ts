import styled from "styled-components";
import palette from "@/lib/palette";

interface BrandButtonProps {
  color: string | null;
}

const BrandButton = styled.button<BrandButtonProps>`
  display: block;
  border: none;
  border-radius: 0.3125rem;
  min-width: 6.25rem;

  color: ${palette.brandWhite};
  background-color: ${({ color }) => color || `${palette.brandColor}`};

  font-size: 0.8rem;
  font-family: "NanumSquareBold";
  padding: 0.6rem 0.5rem;
  cursor: pointer;
`;

export default BrandButton;
