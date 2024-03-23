import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import {
  NavBarContainer,
  NavBarLeftDiv,
  NavBarLeftLinkDiv,
  NavBarLoginButton,
  NavBarNotiImg,
  NavBarNotiPointDiv,
  // NavBarNotiPointImg,
  NavBarNotiProfileDiv,
  NavBarProfileImg,
  NavBarRightDiv,
} from "./Navbar.styled";
import logo from "@/assets/icon/logo.svg";
import googleLogo from "@/assets/icon/google.svg";
import notificationOff from "@/assets/icon/notification-off.svg";
// import notiPoint from "@/assets/icon/noti-point.svg";
import defaultImage from "@/assets/icon/user-default.svg";
import NavLinkComponent from "./NavLinkComponent";
import useUserState from "@/hooks/recoilHooks/useUserState";
import useNotiState from "@/hooks/recoilHooks/useNotiState";
import NotiDropdown from "./NotiDropdown";
import ProfileDropdown from "./ProfileDropdown";
import DummyNotiHistoryData from "@/lib/DummyNotiHistoryData";
import useCloseDropdown from "@/hooks/useCloseDropdown";

function Navbar() {
  const { user, login, logout } = useUserState();
  const { isNoti, toggleNoti } = useNotiState();
  const notiDropDownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const [isNotiOpen, setIsNotiOpen] = useCloseDropdown(notiDropDownRef, false);
  const [isProfileOpen, setIsProfileOpen] = useCloseDropdown(
    profileDropdownRef,
    false,
  );
  const [notiHistoryData, setNotiHistoryData] = useState(DummyNotiHistoryData);

  const handleLoginClick = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?" +
      `client_id=${import.meta.env.VITE_CLIENT_ID}&` +
      "redirect_uri=http://localhost:5173/redirect&" +
      "response_type=token&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };

  const handleNotiDropdown = () => {
    setIsNotiOpen((prev) => !prev);
    if (isNoti) {
      toggleNoti();
    }
    const newNotiHistoryData = [...notiHistoryData];
    for (let i = 0; i < newNotiHistoryData.length; i += 1) {
      if (!newNotiHistoryData[i].isRead) {
        newNotiHistoryData[i].isRead = true;
      }
    }
    setNotiHistoryData([...newNotiHistoryData]);
  };
  const handleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <NavBarContainer>
      <NavBarLeftDiv>
        <NavLink to="/">
          <img src={logo} alt="main-logo" draggable={false} />
        </NavLink>
        <NavBarLeftLinkDiv>
          <NavLinkComponent path="/trade/BTC" name="거래소" />
          <NavLinkComponent path="/history/asset" name="투자내역" />
          <NavLinkComponent path="/rank" name="랭킹" />
        </NavBarLeftLinkDiv>
      </NavBarLeftDiv>
      {user ? (
        <NavBarRightDiv>
          <div ref={notiDropDownRef}>
            <NavBarNotiProfileDiv onClick={handleNotiDropdown}>
              <NavBarNotiImg
                src={notificationOff}
                alt="noti-off-icon"
                draggable={false}
              />
              {isNoti ? (
                // <NavBarNotiPointImg
                //   src={notiPoint}
                //   alt="noti-point"
                //   draggable={false}
                // />
                <NavBarNotiPointDiv>
                  <p>{notiHistoryData.length}</p>
                </NavBarNotiPointDiv>
              ) : null}
            </NavBarNotiProfileDiv>
            <NotiDropdown
              notiHistoryData={notiHistoryData}
              visible={isNotiOpen}
            />
          </div>
          <div ref={profileDropdownRef}>
            <NavBarNotiProfileDiv onClick={handleProfileDropdown}>
              {user.profileUrl ? (
                <NavBarProfileImg
                  src={user.profileUrl}
                  alt="user-profile"
                  draggable={false}
                />
              ) : (
                <NavBarProfileImg
                  src={defaultImage}
                  alt="default-profile"
                  draggable={false}
                />
              )}
            </NavBarNotiProfileDiv>
            <ProfileDropdown
              nickname={user.nickname}
              userId={user.userId}
              logout={logout}
              visible={isProfileOpen}
            />
          </div>
        </NavBarRightDiv>
      ) : (
        <NavBarLoginButton type="button" onClick={handleLoginClick}>
          <img src={googleLogo} alt="google-logo" draggable={false} />
          <p>로그인</p>
        </NavBarLoginButton>
      )}
    </NavBarContainer>
  );
}

export default Navbar;
