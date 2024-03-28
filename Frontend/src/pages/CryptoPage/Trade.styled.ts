import styled from "styled-components";
import { CommonComponent } from "@/styles/CommonStyled";

const TradeContainer = styled.div<{ activeTab: string }>`
  ${CommonComponent}
  height: ${(props) => {
    if (props.activeTab === "간편거래") {
      return "29.5rem";
    }
    return "38rem";
  }};
`;

export default TradeContainer;
