import { DummyDataType } from "@/pages/TradeHistoryPage/FollowPage/FollowingPage";

const DummyData: DummyDataType = {
  totalAsset: 10000000,
  followings: [
    {
      followingId: 1,
      nickname: "이선주",
      investment: 500000,
      returnRate: 14,
      followedAt: "2024-01-20T15:00:00",
      asset: {
        cash: 300000,
        coins: [
          {
            ticker: "KRW-BTC",
            volume: 2.7723,
          },
          {
            ticker: "KRW-DOGE",
            volume: 3.7723,
          },
        ],
      },
    },
    {
      followingId: 2,
      nickname: "이태호",
      investment: 600000,
      returnRate: 17,
      followedAt: "2024-01-20T15:00:00",
      asset: {
        cash: 400000,
        coins: [
          {
            ticker: "KRW-BTC",
            volume: 2.7723,
          },
          {
            ticker: "KRW-DOGE",
            volume: 3.7723,
          },
        ],
      },
    },
  ],
};

export default DummyData;
