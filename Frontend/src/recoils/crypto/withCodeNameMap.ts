import { selector } from "recoil";
import { priceListState } from ".";

// 코드-이름 매핑 selector
const codeNameMapState = selector({
  key: "codeNameMapState",
  get: ({ get }) => {
    const priceList = get(priceListState);
    const codes = priceList!.map((price) => price.code);
    return codes;
  },
});

export default codeNameMapState;
