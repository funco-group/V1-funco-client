export interface OpenOrderContentType {
  id: number;
  ticker: string;
  tradeType: "BUY" | "SELL";
  volume: number;
  orderCash: number;
  price: number;
  tradeDate: string;
}
