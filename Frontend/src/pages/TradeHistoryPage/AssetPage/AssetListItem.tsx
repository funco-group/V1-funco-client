import { AssetItemContainer, AssetItemDiv } from "./AssetListItem.styled";

function AssetListItem() {
  const asset = {
    memberId: 1,
    cash: 500000,
    followingInvestment: 100000,
    coins: [
      {
        ticker: "KRW-BTC",
        volume: 7.7732,
        averagePrice: 45000,
      },
      {
        ticker: "KRW-ETH",
        volume: 4.3324,
        averagePrice: 45000,
      },
    ],
  };

  return (
    <div>
      <AssetItemContainer>
        <AssetItemDiv>팔로우</AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
        <AssetItemDiv>
          {asset.followingInvestment.toLocaleString("ko-KR")}
        </AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
      </AssetItemContainer>
      <AssetItemContainer>
        <AssetItemDiv>현금</AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
        <AssetItemDiv>
          {asset.followingInvestment.toLocaleString("ko-KR")}
        </AssetItemDiv>
        <AssetItemDiv>-</AssetItemDiv>
      </AssetItemContainer>
      {asset.coins.map((coin) => (
        <AssetItemContainer key={coin.ticker}>
          <AssetItemDiv>
            <img
              src={`https://static.upbit.com/logos/${coin.ticker.split("-")[1]}.png`}
              alt={coin.ticker}
              width={20}
            />
            {coin.ticker}
          </AssetItemDiv>
          <AssetItemDiv>
            {coin.volume.toLocaleString("ko-KR")}
            <span> {coin.ticker.split("-")[1]}</span>
          </AssetItemDiv>
          <AssetItemDiv>
            {coin.averagePrice.toLocaleString("ko-KR")}
          </AssetItemDiv>
          <AssetItemDiv>
            {(coin.averagePrice * coin.volume).toLocaleString("ko-KR")}
          </AssetItemDiv>
          <AssetItemDiv>{}</AssetItemDiv>
          <AssetItemDiv>-</AssetItemDiv>
        </AssetItemContainer>
      ))}
    </div>
  );
}

export default AssetListItem;
