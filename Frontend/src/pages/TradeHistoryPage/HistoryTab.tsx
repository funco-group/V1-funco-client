import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HistoryTabContainer, HistoryTabDiv } from "./HistoryTab.styled";
// import useUserState from "@/hooks/recoilHooks/useUserState";

function HistoryTab() {
  // const navigate = useNavigate();
  const location = useLocation();
  // const { user } = useUserState();

  const [nowTabName, setNowTabName] = useState<string | null>(
    location.pathname.split("/")[2],
  );

  if (nowTabName !== location.pathname.split("/")[2]) {
    setNowTabName(location.pathname.split("/")[2]);
  }

  // const handleClick = (selectedTabName: string) => {
  //   navigate(`/history/${selectedTabName}`);
  //   setNowTabName(selectedTabName);
  // };

  return (
    <HistoryTabContainer>
      <HistoryTabDiv>보유자산</HistoryTabDiv>
      <HistoryTabDiv>투자손익</HistoryTabDiv>
      <HistoryTabDiv>자산변동내역</HistoryTabDiv>
      <HistoryTabDiv>팔로우</HistoryTabDiv>
      <HistoryTabDiv>미체결</HistoryTabDiv>
    </HistoryTabContainer>
  );
}

export default HistoryTab;
