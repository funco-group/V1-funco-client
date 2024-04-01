import { useEffect, useState } from "react";
import {
  OpenOrderColumnGridDiv,
  OpenOrderContentTableContainer,
} from "./OpenOrderContentTable.style";
import { ColumnContainer, ColumnTitleDiv } from "@/styles/CommonStyled";
import { OpenOrderContentType } from "@/interfaces/tradeHistory/openOrder/OpenOrderContentType";
import OpenOrderContent from "./OpenOrderContent";

function OpenOrderContentTable() {
  const [openOrderContentList, setOpenOrderContentList] =
    useState<OpenOrderContentType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const openOrderColumnList = [
    "주문시간",
    "거래종류",
    "코인종류",
    "주문단가",
    "주문금액",
    "주문량",
    "취소",
  ];

  useEffect(() => {
    setIsLoading(true);
    setOpenOrderContentList([
      {
        id: 15,
        ticker: "KRW-ETH",
        tradeType: "SELL",
        volume: 0.01,
        orderCash: 40000,
        price: 4000000,
        tradeDate: "2024-03-30T18:09:53",
      },
    ]);
  }, []);

  useEffect(() => {
    if (openOrderContentList !== undefined) {
      setIsLoading(false);
    }
  }, [openOrderContentList]);

  if (isLoading) {
    return <>isLoading~~~~~~~~~~~</>;
  }
  return (
    <OpenOrderContentTableContainer>
      <ColumnContainer>
        <OpenOrderColumnGridDiv>
          {openOrderColumnList.map((column) => (
            <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
          ))}
        </OpenOrderColumnGridDiv>
      </ColumnContainer>
      {openOrderContentList && openOrderContentList.length > 0 ? (
        openOrderContentList.map((content) => (
          <OpenOrderContent key={content.id} content={content} />
        ))
      ) : (
        <div>텅~~~~~~~~~~~~</div>
      )}
    </OpenOrderContentTableContainer>
  );
}

export default OpenOrderContentTable;
