import styled from "styled-components";
import palette from "@/lib/palette";

export const AssetItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const AssetItemDiv = styled.div`
  text-align: center;
  font-size: 0.9rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid ${palette.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-family: "NanumSquareBold"; */

  img {
    margin-right: 0.4rem;
  }

  span {
    font-size: 0.7rem;
    color: ${palette.brandDarkGray};
  }
`;
