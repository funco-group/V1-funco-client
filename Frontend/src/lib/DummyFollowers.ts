import { FollowerContentType } from "@/interfaces/tradeHistory/follow/FollowerContentType";

const DummyFollowers: Map<
  "all" | "following" | "settled",
  FollowerContentType[]
> = new Map([
  [
    "all",
    [
      {
        followId: 6,
        followedAt: "2024-01-10T15:00:00",
        nickname: "나는야 코인퀸",
        investment: 1000000000,
        settlement: 1155000,
        returnRate: 15.5,
        commission: 4650,
        settleDate: "2024-01-20T12:40:44",
        settled: true,
      },
      {
        followId: 4,
        followedAt: "2024-01-13T15:00:00",
        nickname: "나는야 코인킹",
        investment: 1000000,
        settlement: 1155000,
        returnRate: 15.5,
        commission: 4650,
        settleDate: "2024-01-23T19:22:15",
        settled: true,
      },
      {
        followId: 2,
        followedAt: "2024-01-13T15:00:00",
        nickname: "나는야 코인킹",
        investment: 1000000,
        settlement: null,
        returnRate: null,
        commission: null,
        settleDate: null,
        settled: false,
      },
    ],
  ],
  [
    "following",
    [
      {
        followId: 2,
        followedAt: "2024-01-13T15:00:00",
        nickname: "나는야 코인킹",
        investment: 1000000,
        settlement: null,
        returnRate: null,
        commission: null,
        settleDate: null,
        settled: false,
      },
    ],
  ],
  [
    "settled",
    [
      {
        followId: 6,
        followedAt: "2024-01-10T15:00:00",
        nickname: "나는야 코인퀸",
        investment: 1000000,
        settlement: 1155000,
        returnRate: 15.5,
        commission: 4650,
        settleDate: "2024-01-20T12:40:44",
        settled: true,
      },
      {
        followId: 4,
        followedAt: "2024-01-13T15:00:00",
        nickname: "나는야 코인킹",
        investment: 1000000,
        settlement: 1155000,
        returnRate: 15.5,
        commission: 4650,
        settleDate: "2024-01-23T19:22:15",
        settled: true,
      },
    ],
  ],
]);

export default DummyFollowers;
