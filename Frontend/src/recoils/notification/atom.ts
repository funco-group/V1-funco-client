import { atom } from "recoil";

const notiState = atom<boolean>({
  key: "notiState",
  default: true,
});

export default notiState;
