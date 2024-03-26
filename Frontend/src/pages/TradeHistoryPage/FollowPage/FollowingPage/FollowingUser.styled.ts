import styled from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";
import palette from "@/lib/palette";

export const FollowingUserContainer = styled.div`
  ${CommonComponent}
  margin-bottom: .5rem;
  padding-bottom: 1rem;
`;

export const FollowingTitleDiv = styled.div`
  padding: 0.6875rem 1.25rem;
`;

export const FollowingDetailFlexDiv = styled.div`
  display: flex;
`;

export const FollowingDetailDiv = styled.div`
  padding: 0 1rem;
  width: 48rem;
`;

export const FollowingDetailInnerDiv = styled.div`
  margin-top: 40px;
  ${CommonComponent}
`;

export const FollowingColumnGridDiv = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1fr 1fr;
`;

export const FollowingContentDiv = styled.div`
  color: ${palette.brandDarkGray};
  font-size: 0.75rem;
  text-align: end;

  span {
    font-family: "NanumSquareBold";
    color: ${palette.brandBlack};
  }
`;

export const FollowingDateDiv = styled.div`
  text-align: center;
  margin: 0.625rem 0;
`;

export const FollowingCotentMarginDiv = styled.div`
  margin: auto 0.625rem;
`;

export const FollowingUserGraphDiv = styled.div`
  width: 180px;
  height: 130px;
  margin: 1.25rem auto auto auto;
`;

export const FollowingButtonDiv = styled.div`
  padding: 1.25rem 3.3rem 0 1rem;
  display: flex;
  justify-content: space-between;
`;

export const FollowingLeftButtonDiv = styled.div`
  display: flex;
  gap: 0.75rem;
`;
