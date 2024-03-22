import { useSetRecoilState } from "recoil";
import userState from "@/recoils/user";
import { UserType } from "@/recoils/user/atom";

function useUserAction() {
  const setUserState = useSetRecoilState(userState);

  return {
    login: (user: UserType) => setUserState({ user }),
    logout: () => setUserState({ user: null }),
  };
}

export default useUserAction;
