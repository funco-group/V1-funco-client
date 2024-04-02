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
import MemberType from "@/interfaces/userPage/MemberType";
import getMemberInfo from "@/apis/member";

function Index() {
  const { memberId } = useParams();
  const { user } = useUserState();
  const [member, setMember] = useState<MemberType>();

  useEffect(() => {
    if (memberId) {
      getMemberInfo(+memberId, (res) => {
        const { data } = res;
        console.log(data);
        setMember(data);
      });
    }
  }, [memberId]);

  if (!memberId || !user || !member) {
    return <div>존재하지 않는 회원입니다.</div>;
  }

  const isCurrentUser = user?.memberId === +memberId;
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
