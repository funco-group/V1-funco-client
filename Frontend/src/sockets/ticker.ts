import { v4 as uuidv4 } from "uuid";
import { PriceType } from "@/interfaces/PriceWindowType";

export default function tickerWebSocket(
  initCodes: string[],
  setPriceList: React.Dispatch<React.SetStateAction<PriceType[]>>,
) {
  const uuid = uuidv4();
  const handlers = {
    ws: null as WebSocket | null,

    connect() {
      this.ws = new WebSocket("wss://api.upbit.com/websocket/v1");
      this.ws.onopen = this.onopen.bind(this);
      this.ws.onmessage = this.onmessage.bind(this);
      this.ws.onerror = this.onerror.bind(this);
    },

    onopen() {
      console.log("connected!");

      this.ws?.send(`[
        {
          "ticket": ${uuid}
        },
        {
          "type": "ticker",
          "codes": ${JSON.stringify(initCodes)}
        }
      ]`);
    },

    onsend(codes: string[]) {
      this.ws?.send(`[
        {
          "ticket": "${uuid}"
        },
        {
          "type": "ticker",
          "codes": ${JSON.stringify(codes)}
        }
      ]`);
    },

    onmessage(event: MessageEvent) {
      if (event.data instanceof Blob) {
        event.data.arrayBuffer().then((data) => {
          const decoder = new TextDecoder("utf-8");
          const priceData = decoder.decode(data);
          const priceJson = JSON.parse(priceData);

          setPriceList((prevPrice) => {
            return prevPrice.map((price) =>
              price.code === priceJson.code
                ? {
                    ...price,
                    tradePrice: priceJson.trade_price,
                    signedChangeRate: priceJson.signed_change_rate,
                    signedChangePrice: priceJson.signed_change_price,
                    accTradePrice24h: priceJson.acc_trade_price_24h,
                    updated: price.tradePrice !== priceJson.trade_price,
                    updatedDown: price.tradePrice > priceJson.trade_price,
                  }
                : price,
            );
          });

          setTimeout(() => {
            setPriceList((prevPrice) =>
              prevPrice.map((price) =>
                price.code === priceJson.code
                  ? { ...price, updated: false, updatedDown: false }
                  : price,
              ),
            );
          }, 1000);
        });
      }
    },

    onerror() {
      console.error("WebSocket error");
    },

    onclose() {
      if (this.ws) {
        this.ws.close();
      }
    },
  };

  handlers.connect();

  return handlers;
}
