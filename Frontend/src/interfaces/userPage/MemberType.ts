export interface MemberType {
  memberId: number;
  nickname: string;
  profileUrl: string;
  introduction: string;
  assetRank: number;
  followingCashRank: number;
  memberAssetInfo: {
    cash: number;
    coins: {
      ticker: string;
      volume: number;
    }[];
  };
  followingCash: number;
  followerCash: number;
  isFollow: boolean;
  topCoins: string[];
}

export default MemberType;
