import styled from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";
import palette from "@/lib/palette";

export const UserPageProfileContainer = styled.div`
  ${CommonComponent};
  padding: 10px;
`;

export const ProfileDetailContainer = styled.div`
  border: none;
  background-color: ${palette.brandColor2};
  width: 100%;

  img {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 100%;
  }
`;

export const ProfileButton = styled.button``;
