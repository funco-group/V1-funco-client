import styled from "styled-components";
import palette from "@/lib/palette";

export const FollowModalContentDiv = styled.div`
  padding: 1.25rem 1.5rem;
  color: ${palette.brandDarkGray};
  font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${palette.borderGray};
  gap: 0.3125rem;

  label {
    margin: 5px 0 auto auto;
    user-select: none;
  }

  .checkInput {
    position: relative;
    top: 0.0938rem;
  }

  input.cash,
  input.investment {
    text-align: end;
    border: none;
    border: 1px solid ${palette.brandColor};
    margin-left: 9.375rem;
    margin-right: 0.3125rem;
  }
`;

export const FollowModalCheckWrapDiv = styled.div``;

export const FollowModalTermsDiv = styled.div`
  height: 18.75rem;
  border: 1px solid ${palette.brandColor};
  padding: 0.625rem;
`;
