import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ProfileDiv,
  ProfileDropdownButton,
  ProfileDropdownContainer,
} from "./ProfileDropdown.styled";

function ProfileDropdown({
  nickname,
  userId,
  logout,
  visible,
}: {
  nickname: string;
  userId: number;
  logout: () => void;
  visible: boolean;
}) {
  const navigate = useNavigate();

  const handleNavigateMypage = () => {
    navigate(`user/${userId}`);
  };

  const handleLogout = () => {
    logout();
  };

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
    <ProfileDropdownContainer $visible={visible}>
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
