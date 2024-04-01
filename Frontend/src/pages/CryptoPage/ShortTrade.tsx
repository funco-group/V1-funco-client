import { useState } from "react";
import TradeButton from "@/components/crypto/TradeButtonTab";
import { ButtonContainer } from "@/styles/Crypto.styled";
import ShortTradeItem from "./ShortTradeItem";

interface ShortTradeProps {
  curPrice: number;
}

function ShortTrade({ curPrice }: ShortTradeProps) {
  const buttons = ["매수", "매도"];
  const [activeButton, setActiveButton] = useState<string>("매수");

  const changeButton = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div>
      <ButtonContainer>
        {buttons.map((button) => {
          return (
            <TradeButton
              key={button}
              name={button}
              activeButton={activeButton}
              changeButton={changeButton}
            />
          );
        })}
      </ButtonContainer>
      {activeButton === "매수" ? (
        <ShortTradeItem name="매수" curPrice={curPrice} />
      ) : (
        <ShortTradeItem name="매도" curPrice={curPrice} />
      )}
    </div>
  );
}

export default ShortTrade;
