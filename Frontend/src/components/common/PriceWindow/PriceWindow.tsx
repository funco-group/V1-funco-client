import { useState, useEffect, useRef } from "react";
import { AxiosResponse } from "axios";
import {
  PriceWindowContainer,
  ColumnContainer,
  ColumnTitleDiv,
} from "./PriceWindow.styled";
import tickerWebSocket from "@/sockets/ticker";
import {
  ResCoinType,
  PriceType,
  FavoriteCoinResponseType,
} from "@/interfaces/PriceWindowType";
import {
  addFavoriteCoin,
  getFavoriteCoinList,
  // removeFavoriteCoin,
} from "@/apis/crypto";
import { getCoinList } from "@/apis/upbit";
import CoinSearch from "./CoinSearch";
import PriceItem from "./PriceItem";
import Tab from "@/components/crypto/Tab";

interface WebSocketHandlers {
  ws: WebSocket | null;
  connect: () => void;
  onopen: () => void;
  onsend: (codes: string[]) => void;
  onmessage: (event: MessageEvent) => void;
  onerror: () => void;
  onclose: () => void;
}

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
      // lastUpdated: 0,
    }));
};

function PriceWindow() {
  const tabs = ["원화", "보유", "관심"];
  const columns = ["한글명", "현재가", "전일대비", "거래대금"];
  const [activeTab, setActiveTab] = useState<string>("원화");
  const [socket, setSocket] = useState<WebSocketHandlers | undefined>(
    undefined,
  );
  const [favCoins, setFavCoins] = useState<string[]>([]);
  const [priceList, setPriceList] = useState<PriceType[]>([]);
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
    getFavoriteCoinList((response: AxiosResponse<FavoriteCoinResponseType>) => {
      const { data } = response;
      setFavCoins(data.tickers);
    });
    // 2. 페이지 나오면 소켓 중단 언마운트
  }, []);

  const socketRef = useRef(socket);

  useEffect(() => {
    if (activeTab === "보유") {
      // 보유 코인 get
    } else if (activeTab === "관심") {
      socketRef.current?.onsend(favCoins);
    }
  }, [activeTab, favCoins]);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const clickFavorite = (code: string) => {
    if (favCoins.includes(code)) {
      // removeFavoriteCoin(code);
      setFavCoins(favCoins.filter((favCoin) => favCoin !== code));
    } else {
      addFavoriteCoin(code);
      setFavCoins([...favCoins, code]);
    }
  };

  if (!priceList) return null;

  return (
    <PriceWindowContainer>
      <CoinSearch />
      <Tab tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
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
                onClickFavorite={clickFavorite}
              />
            ))
        : priceList.map((price: PriceType) => (
            <PriceItem
              key={price.code}
              price={price}
              isFav={favCoins.includes(price.code)}
              onClickFavorite={clickFavorite}
            />
          ))}
    </PriceWindowContainer>
  );
}

export default PriceWindow;
