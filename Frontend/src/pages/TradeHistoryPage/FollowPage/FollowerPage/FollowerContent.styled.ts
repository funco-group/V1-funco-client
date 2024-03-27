import styled from "styled-components";
import palette from "@/lib/palette";

export const FollowerContentGridDiv = styled.div`
  display: grid;
  grid-template-columns: 7.5rem 1fr 1fr 3fr 7.5rem;
`;

export const FollowerContentInsideGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const FollowerContentDiv = styled.div`
  color: ${palette.brandDarkGray};
  font-size: 0.8rem;
  text-align: end;

  span {
    font-family: "NanumSquareBold";
    color: ${palette.brandBlack};
  }
`;
