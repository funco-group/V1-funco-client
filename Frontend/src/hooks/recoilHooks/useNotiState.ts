import { useRecoilState } from "recoil";
import notiState from "@/recoil/notification";

function useNotiState() {
  const [isNoti, setIsNoti] = useRecoilState(notiState);
  return {
    isNoti,
    toggleNoti: () => setIsNoti((prev) => !prev),
  };
}

export default useNotiState;
