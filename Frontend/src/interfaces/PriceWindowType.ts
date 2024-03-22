export interface ResCoinType {
  market: string;
  korean_name: string;
  english_name: string;
}

export interface PriceType {
  code: string;
  koreanName: string;
  tradePrice: number;
  signedChangeRate: number;
  signedChangePrice: number;
  accTradePrice24h: number;
  updated: boolean;
  // updatedUp: boolean;
  updatedDown: boolean;
  lastUpdated?: number;
}
