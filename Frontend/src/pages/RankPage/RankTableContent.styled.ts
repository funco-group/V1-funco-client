import styled from "styled-components";
import palette from "@/lib/palette";

export const RankTableContentContainer = styled.div`
  color: ${palette.brandDarkGray};
  font-size: 0.75rem;
  text-align: center;
  border-bottom: 1px solid ${palette.deactivatedGray};
  padding: 0.625rem 0;
`;

export const RankTableContentUserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
  }
  cursor: pointer;
`;

export const RankSpan = styled.span<{ $isTopRank: string | undefined }>`
  font-size: ${({ $isTopRank }) =>
    $isTopRank !== undefined ? "1.5rem" : null};
`;
