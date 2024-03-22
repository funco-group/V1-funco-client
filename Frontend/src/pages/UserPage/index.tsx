import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import palette from "@/lib/palette";
import UserPageProfile from "./UserPageProfile";
import {
  UserLayoutContainer,
  UserLayoutFirstRowDiv,
  UserLayoutSecondRowDiv,
  UserLayoutThirdRowDiv,
} from "./styled";
import useUserState from "@/hooks/recoilHooks/useUserState";
import DummyMembers from "@/lib/DummyMembers";

function index() {
  const { memberId } = useParams();
  const { user } = useUserState();
  const navigate = useNavigate();

  if (!memberId || !user) {
    return <div>Member ID가 없습니다.</div>;
  }

  const member = DummyMembers[+memberId - 1];

  const isCurrentUser = user?.userId === +memberId;

  return (
    <UserLayoutContainer>
      <UserLayoutFirstRowDiv>
        <UserPageProfile isCurrentUser={isCurrentUser} member={member} />
        <div style={{ backgroundColor: palette.brandColor }}>second</div>
      </UserLayoutFirstRowDiv>
      <UserLayoutSecondRowDiv>
        <div style={{ backgroundColor: palette.brandColor2 }}>third</div>
        <div style={{ backgroundColor: "darkgrey" }}>fourth</div>
      </UserLayoutSecondRowDiv>
      <UserLayoutThirdRowDiv>third</UserLayoutThirdRowDiv>
    </UserLayoutContainer>
  );
}

export default index;
