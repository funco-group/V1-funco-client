import styled, { keyframes } from "styled-components";
import palette from "@/lib/palette";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NotiDropdownContainer = styled.div`
  width: 25rem;
  padding: 0.75rem;
  background-color: ${palette.brandWhite};

  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);

  position: fixed;
  z-index: 1000;

  top: 4.375rem;
  right: 5.9375rem;

  animation: ${fadeIn} 0.5s ease forwards;
`;

export const NotiHistoryContentContainer = styled.div`
  height: 27.4rem;
  overflow: auto;
`;

export const NotiMoreButton = styled.button`
  display: block;
  margin: 0.625rem auto 0 auto;
  border: none;
  background-color: transparent;

  display: flex;

  p {
    color: #999999;
    margin: auto;
  }

  img {
    display: block;
    margin: auto;
    margin-bottom: 0.1875rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
