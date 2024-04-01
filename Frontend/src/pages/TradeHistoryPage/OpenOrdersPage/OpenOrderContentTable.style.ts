import styled from "styled-components";
import palette from "@/lib/palette";

export const OpenOrderContentTableContainer = styled.div`
  margin-top: 5rem;
  border-top: 1px solid ${palette.deactivatedGray};
`;

export const OpenOrderColumnGridDiv = styled.div`
  display: grid;
  grid-template-columns: 7.5rem 7.5rem 7.5rem 1fr 1fr 1fr 7.5rem;
`;
