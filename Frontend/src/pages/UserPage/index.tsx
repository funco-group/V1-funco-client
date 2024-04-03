import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserPageProfile from "./UserPageProfile";
import { UserLayoutContainer, UserLayoutRowDiv } from "./styled";
import useUserState from "@/hooks/recoilHooks/useUserState";
import MemberType from "@/interfaces/userPage/MemberType";
import getMemberInfo from "@/apis/member";
import RecentInvestment from "./RecentInvestment";
import UserFollow from "./UserFollow";
import AssetGraph from "./AssetGraph";
import ReturnRateGraph from "./ReturnRateGraph";

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
      <UserLayoutRowDiv>
        <UserPageProfile isCurrentUser={isCurrentUser} member={member} />
        <AssetGraph member={member} />
      </UserLayoutRowDiv>
      <UserLayoutRowDiv>
        <RecentInvestment topCoins={member.topCoins} />
        <UserFollow
          followingCash={member.followingCash}
          followerCash={member.followerCash}
        />
      </UserLayoutRowDiv>
      <ReturnRateGraph memberId={member.memberId} />
    </UserLayoutContainer>
  );
}

export default Index;
