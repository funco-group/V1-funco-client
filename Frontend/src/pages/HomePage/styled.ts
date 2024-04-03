import styled from "styled-components";
import palette from "@/lib/palette";

export const HomePageColumnGridDiv = styled.div`
  height: calc(100vh - 10rem);
  display: grid;
  grid-template-columns: 1fr 28rem 550px 28rem 1fr;
`;

export const HomePageRowGridDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const HomePageFlexDiv = styled.div<{ direction: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ direction }) => direction};
`;

export const PreviewDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewInnerDiv = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: ${palette.brandColor2}; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
`;

export const PreviewImage = styled.img`
  width: 500px;
  height: 500px;
  opacity: 0;
  transition: opacity 0.5s ease;
`;
