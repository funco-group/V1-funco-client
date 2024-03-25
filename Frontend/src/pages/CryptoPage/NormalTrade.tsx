import { useState } from "react";
import NormalTradeItem from "./NormalTradeItem";
import TradeButton from "@/components/crypto/TradeButtonTab";
import { ButtonContainer } from "@/styles/Crypto.styled";

function NormalTrade() {
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
        <NormalTradeItem name="매수" />
      ) : (
        <NormalTradeItem name="매도" />
      )}
    </div>
  );
}

export default NormalTrade;
