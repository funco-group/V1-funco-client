import styled from "styled-components";
import palette from "@/lib/palette";

export const FollowerContentTableContainer = styled.div`
  border-top: 1px solid ${palette.deactivatedGray};
`;

export const FolloweColumnGridDiv = styled.div`
  display: grid;
  grid-template-columns: 7.5rem 1fr 1fr 1fr 1fr 1fr 7.5rem;
`;
