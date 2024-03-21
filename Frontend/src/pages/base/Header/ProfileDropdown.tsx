import { useNavigate } from "react-router-dom";
import {
  ProfileDiv,
  ProfileDropdownButton,
  ProfileDropdownContainer,
} from "./ProfileDropdown.styled";

function ProfileDropdown({
  nickname,
  userId,
  logout,
}: {
  nickname: string;
  userId: number;
  logout: () => void;
}) {
  const navigate = useNavigate();

  const handleNavigateMypage = () => {
    navigate(`user/${userId}`);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <ProfileDropdownContainer>
      <ProfileDiv>
        <p>{nickname}</p>
      </ProfileDiv>
      <ProfileDropdownButton type="button" onClick={handleNavigateMypage}>
        마이페이지
      </ProfileDropdownButton>
      <ProfileDropdownButton type="button" onClick={handleLogout}>
        로그아웃
      </ProfileDropdownButton>
    </ProfileDropdownContainer>
  );
}

export default ProfileDropdown;
