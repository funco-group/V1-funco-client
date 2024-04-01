export interface MemberType {
  memberId: number;
  nickname: string;
  profileUrl: string;
  introduction: string;
  rank: number;
  followingCash: number;
  followerCash: number;
  isFollow: boolean;
  topCoin: string[];
}

export default MemberType;
