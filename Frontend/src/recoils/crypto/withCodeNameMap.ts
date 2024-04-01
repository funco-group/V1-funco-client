// import { selector } from "recoil";
// import { priceListState } from ".";

// // 코드-이름 매핑 selector
// const codeNameMapState = selector({
//   key: "codeNameMapState",
//   get: ({ get }) => {
//     const priceList = get(priceListState);
//     return priceList.reduce((acc, coin) => {
//       acc.set(coin.code, coin.koreanName);
//       return acc;
//   },
// });

// export default codeNameMapState;
