import TradeButtonContainer from "./TradeButton.styled";

interface Props {
  name: string;
}

function TradeButton({ name }: Props) {
  return <TradeButtonContainer name={name}>{name} 주문</TradeButtonContainer>;
}

export default TradeButton;
