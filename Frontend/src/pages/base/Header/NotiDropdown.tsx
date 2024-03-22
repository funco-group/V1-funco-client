import { useEffect, useState } from "react";
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
  visible,
}: {
  notiHistoryData: NotiHistoryType[];
  visible: boolean;
}) {
  const [notiHistoryList] = useState<NotiHistoryType[]>(notiHistoryData);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (visible) {
      setOpen(true);
    } else {
      setTimeout(() => setOpen(false), 150);
    }
  }, [visible]);

  if (!open) {
    return null;
  }

  return (
    <NotiDropdownContainer $visible={visible}>
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
