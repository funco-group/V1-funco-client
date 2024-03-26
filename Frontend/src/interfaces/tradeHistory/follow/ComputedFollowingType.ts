export interface ComputedFollowingType {
  followingId: number;
  nickname: string;
  date: string;
  investment: number;
  estimatedValue: number;
  asset: {
    cash: number;
    coins: {
      ticker: string;
      price: number;
    }[];
  };
}
