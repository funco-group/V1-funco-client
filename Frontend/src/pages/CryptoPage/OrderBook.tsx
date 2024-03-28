import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  OrderBookContainer,
  TitleContainer,
  TitleDiv,
  ContentContainer,
  ContentDiv,
  SizeDiv,
  PriceDiv,
} from "./OrderBook.styled";
import orderbookWebSockets from "@/sockets/orderbookWebSocket";
import { WebSocketHandlers } from "@/interfaces/PriceWindowType";
import { OrderType } from "@/interfaces/CryptoType";

function OrderBook() {
  const topTitle = ["매도", "호가", ""];
  const BottomTitle = ["", "호가", "매수"];
  const { coinCode } = useParams();
  const [orderList, setOrderList] = useState<OrderType[]>([]);
  const [socket, setSocket] = useState<WebSocketHandlers | undefined>(
    undefined,
  );

  useEffect(() => {
    const orderbookSocket = orderbookWebSockets(setOrderList);
    setSocket(orderbookSocket);

    return () => {
      if (orderbookSocket.status === WebSocket.OPEN) {
        orderbookSocket.close();
      }
    };
  }, []);

  useEffect(() => {
    if (socket?.status === WebSocket.OPEN) {
      socket.send(JSON.stringify([coinCode]));
    }
  }, [coinCode, socket?.status, socket]);

  return (
    <OrderBookContainer>
      <TitleContainer $top>
        {topTitle.map((title) => (
          <TitleDiv type={title} key={title}>
            {title}
          </TitleDiv>
        ))}
      </TitleContainer>
      <ContentContainer>
        {[...orderList].reverse().map((d, index) => (
          <ContentDiv key={index}>
            <SizeDiv $buy={false}>{d.ask_size.toFixed(3)}</SizeDiv>
            <PriceDiv $buy={false}>
              {d.ask_price.toLocaleString("en-US")}
            </PriceDiv>
            <div />
          </ContentDiv>
        ))}
        {orderList.map((d, index) => (
          <ContentDiv key={index}>
            <div />
            <PriceDiv $buy>{d.bid_price.toLocaleString("en-US")}</PriceDiv>
            <SizeDiv $buy>{d.bid_size.toFixed(3)}</SizeDiv>
          </ContentDiv>
        ))}
      </ContentContainer>
      <TitleContainer $top={false}>
        {BottomTitle.map((title) => (
          <TitleDiv type={title} key={title}>
            {title}
          </TitleDiv>
        ))}
      </TitleContainer>
    </OrderBookContainer>
  );
}

export default OrderBook;
