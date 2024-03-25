import { useState } from "react";
import TradeButton from "@/components/crypto/TradeButtonTab";
import { ButtonContainer } from "@/styles/Crypto.styled";
import ShortTradeItem from "./ShortTradeItem";

function ShortTrade() {
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
        <ShortTradeItem name="매수" />
      ) : (
        <ShortTradeItem name="매도" />
      )}
    </div>
  );
}

export default ShortTrade;
