export interface DailyStatisticsType {
  date: string;
  returnResult: number;
  returnRate: number;
  accReturnResult: number;
  accdReturnRate: number;
  beginningAsset: number;
  endingAsset: number;
}

export interface MonthlyStatistics {
  month: number;
  returnResult: number;
  returnRate: number;
  accReturnResult: number;
  accdReturnRate: number;
  beginningAsset: number;
  endingAsset: number;
}
