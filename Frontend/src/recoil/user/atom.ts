import { atom } from "recoil";

export interface UserType {
  userId: number;
  nickname: string;
  profileUrl: string;
}

export interface UserState {
  user: UserType | null;
}

// user 상태를 로그인일 때는 값이 있고,
// 로그아웃 상태일 때는 null이 들어가도록 설정
const userState = atom<UserState>({
  key: "userState",
  default: {
    // userId: -1,
    // nickname: "",
    // profileUrl: "",
    user: null,
  },
});

export default userState;
