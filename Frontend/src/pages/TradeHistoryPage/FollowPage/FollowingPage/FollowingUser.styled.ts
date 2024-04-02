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
  width: 70%;
`;

export const FollowingDetailInnerDiv = styled.div`
  margin-top: 1.5rem;
  ${CommonComponent}
`;

export const FollowingColumnGridDiv = styled.div`
  display: grid;
  grid-template-columns: 7.5rem 1fr 1fr 1fr;
`;

export const FollowingContentDiv = styled.div`
  color: ${palette.brandDarkGray};
  font-size: 1rem;
  text-align: end;

  span {
    font-family: "NanumSquareBold";
    color: ${palette.brandBlack};
  }
`;

export const FollowingDateDiv = styled.div`
  text-align: center;
  margin: 1.25rem auto;
  padding: 0.625rem;
`;

export const FollowingContentMarginDiv = styled.div`
  margin: auto 0.625rem;
`;

export const FollowingUserGraphDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FollowingUserGraphInnerDiv = styled.div`
  width: 70%;
`;

export const FollowingButtonDiv = styled.div`
  padding: 1.25rem 4.45rem 0 1rem;
  display: flex;
  justify-content: space-between;
`;

export const FollowingLeftButtonDiv = styled.div`
  display: flex;
  gap: 0.75rem;
`;
