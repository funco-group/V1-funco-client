import { useRecoilState } from "recoil";
import userState from "@/recoils/user";
import { UserType } from "@/interfaces/user/UserType";

function useUserState() {
  const [{ user }, setUserState] = useRecoilState(userState);
  return {
    user,
    login: (newUser: UserType) => {
      setUserState({ user: newUser });
    },
    logout: () => setUserState({ user: null }),
  };
}

export default useUserState;
