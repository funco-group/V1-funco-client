import { useRecoilState } from "recoil";
import userState from "@/recoil/user";
import { UserType } from "@/recoil/user/atom";

function useUserState() {
  const [{ user }, setUserState] = useRecoilState(userState);
  return {
    user,
    login: (newUser: UserType) => setUserState({ user: newUser }),
    logout: () => setUserState({ user: null }),
  };
}

export default useUserState;
