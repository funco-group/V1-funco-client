import { useEffect, useState } from "react";
import BrandButtonComponent from "@/components/common/Button/BrandButtonComponent";
import {
  ProfileButtonDiv,
  ProfileDetailContainer,
  ProfileEditButtonDiv,
  ProfileInput,
  ProfileRankDiv,
  ProfileRankFlexDiv,
  ProfileRankOuterDiv,
  ProfileTextArea,
  UserPageProfileContainer,
} from "./UserPageProfile.styled";
import { ComponentTitleH3 } from "./styled";
import MemberType from "@/interfaces/userPage/MemberType";
import useFollowModalState from "@/hooks/recoilHooks/useFollowModalState";
import medalMap from "@/lib/medalMap";
import PortfolioModal from "./PortfolioModal";

interface UserPageProfileProps {
  isCurrentUser: boolean;
  member: MemberType;
}

function UserPageProfile({ isCurrentUser, member }: UserPageProfileProps) {
  const [nickname, setNickname] = useState(member.nickname);
  const [isEditNickname, setIsEditNickname] = useState(false);
  const [introduction, setIntroduction] = useState(member.introduction);
  const [isEditIntro, setIsEditIntro] = useState(false);
  const { onFollowModal } = useFollowModalState();
  const [onFollowAssetModal, setOnFollowAssetModal] = useState(false);
  // const [nameInput, setNameInput] = useState<boolean>(false);

  useEffect(() => {
    setNickname(member.nickname);
    if (!member.introduction) {
      setIntroduction("한 줄 소개를 입력해주세요!");
    } else {
      setIntroduction(member.introduction);
    }
  }, [member]);

  const handleNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleNicknameEditClick = () => {
    setIsEditNickname((prev) => !prev);
  };
  const handleIntroInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
    // 100자 제한 넣어야돼!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  };
  const handleIntroEditClick = () => {
    setIsEditIntro((prev) => !prev);
  };

  const handleFollowClick = () => {
    onFollowModal({
      memberId: member.memberId,
    });
  };

  const handlePortFolioClick = () => {
    setOnFollowAssetModal((prev) => !prev);
  };

  function renderButton() {
    if (isCurrentUser) {
      return (
        <ProfileEditButtonDiv>
          <BrandButtonComponent
            content={isEditNickname ? "닉네임 저장" : "닉네임 수정"}
            color={null}
            cancel={false}
            onClick={handleNicknameEditClick}
            disabled={false}
          />
          <BrandButtonComponent
            content={isEditIntro ? "한 줄 소개 저장" : "한 줄 소개 수정"}
            color={null}
            cancel={false}
            onClick={handleIntroEditClick}
            disabled={false}
          />
        </ProfileEditButtonDiv>
      );
    }
    if (!member.isFollow) {
      return (
        <BrandButtonComponent
          content="팔로우"
          color={null}
          cancel={false}
          onClick={handleFollowClick}
          disabled={false}
        />
      );
    }
    return (
      <BrandButtonComponent
        content="포트폴리오 보기"
        color={null}
        cancel={false}
        onClick={handlePortFolioClick}
        disabled={false}
      />
    );
  }
  return (
    <UserPageProfileContainer>
      {onFollowAssetModal && (
        <PortfolioModal
          memberId={member.memberId}
          nickname={member.nickname}
          handlePortFolioClick={handlePortFolioClick}
        />
      )}
      <ComponentTitleH3>프로필</ComponentTitleH3>
      <ProfileDetailContainer>
        <img src={member.profileUrl} alt="member-profile" />
        <ProfileInput
          type="text"
          value={nickname}
          onChange={handleNicknameInput}
          disabled={!isEditNickname}
          $active={isEditNickname}
        />
        <ProfileRankFlexDiv>
          <ProfileRankOuterDiv>
            <div>총 자산 랭킹</div>
            <ProfileRankDiv>
              <span>{medalMap.get(member.assetRank) || "🏃‍♂️"}</span>
              {member.assetRank}위
            </ProfileRankDiv>
          </ProfileRankOuterDiv>
          <ProfileRankOuterDiv>
            <div>총 팔로워 랭킹</div>
            <ProfileRankDiv>
              <span>{medalMap.get(member.followingCashRank) || "🏃‍♂️"}</span>
              {member.followingCashRank}위
            </ProfileRankDiv>
          </ProfileRankOuterDiv>
        </ProfileRankFlexDiv>
        {isEditIntro ? (
          <ProfileTextArea
            value={introduction}
            onChange={handleIntroInput}
            readOnly={!isEditIntro}
            $active={isEditIntro}
          />
        ) : (
          <p>{introduction}</p>
        )}
      </ProfileDetailContainer>
      <ProfileButtonDiv>{renderButton()}</ProfileButtonDiv>
    </UserPageProfileContainer>
  );
}

export default UserPageProfile;
