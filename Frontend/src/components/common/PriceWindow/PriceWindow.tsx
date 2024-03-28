import { useState, useEffect, useMemo } from "react";
import { AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";
import {
  PriceWindowContainer,
  ColumnContainer,
  ColumnTitleDiv,
} from "./PriceWindow.styled";
import tickerWebSocket from "@/sockets/tickerWebSocket";
import {
  PriceType,
  FavoriteCoinResponseType,
  WebSocketHandlers,
} from "@/interfaces/PriceWindowType";
import {
  addFavoriteCoin,
  getFavoriteCoinList,
  removeFavoriteCoin,
} from "@/apis/crypto";
import CoinSearch from "./CoinSearch";
import PriceItem from "./PriceItem";
import Tab from "@/components/crypto/Tab";
import codeListState from "@/recoils/crypto/withCodeList";

interface PriceWindowProps {
  priceList: PriceType[];
  setPriceList: React.Dispatch<React.SetStateAction<PriceType[]>>;
}

function PriceWindow({ priceList, setPriceList }: PriceWindowProps) {
  const codes = useRecoilValue(codeListState);
  const tabs = ["원화", "보유", "관심"];
  const columnList = ["한글명", "현재가", "전일대비", "거래대금"];
  const [activeTab, setActiveTab] = useState<string>("원화");
  const [socket, setSocket] = useState<WebSocketHandlers | undefined>(
    undefined,
  );
  const [favCoins, setFavCoins] = useState<string[]>([]);

  useMemo(() => {
    // 1. 소켓 연결
    const tickerSocket = tickerWebSocket(setPriceList);
    setSocket(tickerSocket);

    // 2. 관심 코인 갖고 오기
    getFavoriteCoinList((response: AxiosResponse<FavoriteCoinResponseType>) => {
      const { data } = response;
      setFavCoins(data.tickers);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (socket?.status === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  useEffect(() => {
    if (socket?.status === WebSocket.OPEN) {
      if (activeTab === "원화") {
        socket.send(JSON.stringify(codes));
      } else if (activeTab === "보유") {
        // 보유 코인 get
      } else if (activeTab === "관심") {
        socket.send(JSON.stringify(favCoins));
      }
    }
  }, [activeTab, favCoins, socket?.status, socket, codes]);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const clickFavorite = (code: string, e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (favCoins.includes(code)) {
      removeFavoriteCoin(code);
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
        {columnList.map((column) => (
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
