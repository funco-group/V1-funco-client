import { useSetRecoilState } from "recoil";
import userState from "@/recoil/user";
import { UserType } from "@/recoil/user/atom";

function useUserAction() {
  const setUserState = useSetRecoilState(userState);

  return {
    login: (user: UserType) => setUserState({ user }),
    logout: () => setUserState({ user: null }),
  };
}

export default useUserAction;
