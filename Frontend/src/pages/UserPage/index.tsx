import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import MemberType from "@/interfaces/userPage/MemberType";

function Index() {
  const { nickname } = useParams();
  const { user } = useUserState();
  const [member, setMember] = useState<MemberType>();

  useEffect(() => {
    setMember(
      DummyMembers[
        DummyMembers.findIndex(
          (dummyMember) => dummyMember.nickname === nickname,
        )
      ],
    );
  }, [nickname]);

  if (!nickname || !user || !member) {
    return <div>존재하지 않는 회원입니다.</div>;
  }

  const isCurrentUser = user?.nickname === nickname;
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

export default Index;
