import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import {
  PriceWindowContainer,
  TabContainer,
  TabItemDiv,
  ColumnContainer,
  ColumnTitleDiv,
} from "./PriceWindow.styled";
import tickerWebSocket from "@/webSocket/ticker";
import { ResCoinType, PriceType } from "@/interfaces/PriceWindowType";
import getCoinList from "@/apis/upbit";
import CoinSearch from "./CoinSearch";
import PriceItem from "./PriceItem";
import getFavoriteCoinList from "@/apis/crypto";

const convertCoinTypeToPriceType = (coinData: ResCoinType[]): PriceType[] => {
  return coinData
    .filter((coin) => coin.market.startsWith("KRW"))
    .map((coin: ResCoinType) => ({
      code: coin.market,
      koreanName: coin.korean_name,
      tradePrice: 0,
      signedChangeRate: 0,
      signedChangePrice: 0,
      accTradePrice24h: 0,
      updated: false,
      // updatedUp: false,
      updatedDown: false,
      lastUpdated: 0,
    }));
};

function PriceWindow() {
  const [priceList, setPriceList] = useState<PriceType[]>([]);
  const tabs = ["원화", "보유", "관심"];
  const columns = ["한글명", "현재가", "전일대비", "거래대금"];
  const [activeTab, setActiveTab] = useState<string>("원화");
  const [socket, setSocket] = useState<WebSocket>();
  const [favCoins, setFavCoins] = useState<string[]>([]);
  // console.log(priceList);

  useEffect(() => {
    getCoinList((response: AxiosResponse<ResCoinType[]>) => {
      const { data } = response;
      const convertedCoins = convertCoinTypeToPriceType(data);
      setPriceList(convertedCoins);
      setSocket(
        tickerWebSocket(
          convertedCoins.map((price) => price.code),
          setPriceList,
        ),
      );
    });
    // 1. 관심 코인 갖고 오기
    getFavoriteCoinList(({ data }) => {
      setFavCoins(data.tickers);
    });
    // 2. 페이지 나오면 소켓 중단 언마운트
  }, []);

  const socketSend = (code: string[]) => {
    socket?.onsend(code);
  };

  useEffect(() => {
    if (activeTab === "보유") {
    } else if (activeTab === "관심") {
      socketSend(favCoins);
    }
  }, [activeTab, favCoins]);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  if (!priceList) return null;

  return (
    <PriceWindowContainer>
      <CoinSearch />
      <TabContainer>
        {tabs.map((tab) => (
          <TabItemDiv
            key={tab}
            active={activeTab === tab}
            onClick={() => changeTab(tab)}
          >
            {tab}
          </TabItemDiv>
        ))}
      </TabContainer>
      <ColumnContainer>
        <div />
        {columns.map((column) => (
          <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
        ))}
      </ColumnContainer>
      {activeTab === "관심"
        ? priceList
            .filter((price) => favCoins.includes(price.code))
            .map((price: PriceType) => (
              <PriceItem
                key={price.code}
                price={price}
                isFav={favCoins.includes(price.code)}
              />
            ))
        : priceList.map((price: PriceType) => (
            <PriceItem
              key={price.code}
              price={price}
              isFav={favCoins.includes(price.code)}
            />
          ))}
    </PriceWindowContainer>
  );
}

export default PriceWindow;
