import { useState } from "react";
import {
  NotiDropdownContainer,
  NotiHistoryContentContainer,
  NotiMoreButton,
} from "./NotiDropdown.styled";
import NotiHistoryType from "@/interfaces/notification/NotiHistoryType";
import NotiHistoryContent from "./NotiHistoryContent";
import downArrow from "@/assets/icon/chevron-down.svg";

function NotiDropdown({
  notiHistoryData,
}: {
  notiHistoryData: NotiHistoryType[];
}) {
  const [notiHistoryList] = useState<NotiHistoryType[]>(notiHistoryData);
  return (
    <NotiDropdownContainer>
      <NotiHistoryContentContainer>
        {notiHistoryList.map((notiHistory) => (
          <NotiHistoryContent key={notiHistory.id} notiHistory={notiHistory} />
        ))}
      </NotiHistoryContentContainer>
      <NotiMoreButton>
        <p>더보기</p>
        <img src={downArrow} alt="more-icon" />
      </NotiMoreButton>
    </NotiDropdownContainer>
  );
}

export default NotiDropdown;
