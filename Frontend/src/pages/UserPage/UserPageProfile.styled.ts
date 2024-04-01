import styled, { css } from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";
import palette from "@/lib/palette";

export const UserPageProfileContainer = styled.div`
  ${CommonComponent};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const ProfileDetailContainer = styled.div`
  border: none;
  background-color: ${palette.brandColor2};
  padding: 0.9375rem;
  height: 15.625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  img {
    display: block;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 100%;
    object-fit: cover;
  }

  p {
    width: 25rem;
    word-wrap: break-word;
    text-align: center;
    margin: auto;
  }
`;

export const ProfileRankDiv = styled.div`
  font-size: 1.25rem;
  color: ${palette.brandDarkGray};

  display: flex;
  align-items: center;

  span {
    font-family: "NanumSquareBold";
    font-size: 1.5rem;
  }
`;

const InputCss = css<{ $active: boolean }>`
  border: ${({ $active }) =>
    $active ? `2px solid ${palette.brandBlack}` : "none"};
  background-color: ${({ $active }) =>
    $active ? palette.brandWhite : "transparent"};
  text-align: center;
  font-family: "NanumSquareBold";
  font-size: 1.25rem;
`;

export const ProfileInput = styled.input<{ $active: boolean }>`
  ${InputCss}
`;

export const ProfileTextArea = styled.textarea<{ $active: boolean }>`
  ${InputCss}
  font-size: 1rem;
  width: 100%;
  height: 3.875rem;
  resize: none;
  outline: none;
`;

export const ProfileButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileEditButtonDiv = styled.div`
  display: flex;
  gap: 0.625rem;
`;
