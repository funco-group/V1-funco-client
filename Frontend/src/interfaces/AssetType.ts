export interface CoinVolumeType {
  volume: number;
}

export interface AssetCoinType {
  ticker: string;
  volume: number;
  averagePrice: number;
}

export interface AssetResponseType {
  memberId: number;
  cash: number;
  followingInvestment: number;
  holdingCoinInfos: AssetCoinType[];
}

export interface AssetType {
  imgSrc: string;
  name: string;
  volume: number | null;
  averagePrice: number | null;
  price: number | null;
  evaluationAmount: number;
  evaluationProfit: number | null;
}

export interface CoinCurPrice {
  ticker: string;
  price: number;
}

export interface TotalAssetType {
  cash: number;
  price: number;
  evaluationAmount: number;
  asset: number;
  returnResult: number;
  evaluationProfit: number;
}
