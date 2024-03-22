import { CoinSearchContainer } from "./CoinSearch.styled";
import SearchIcon from "@/assets/icon/search-icon.svg";

function CoinSearch() {
  return (
    <CoinSearchContainer>
      <img src={SearchIcon} alt="search-icon" />
      <input type="text" placeholder="코인명/심볼검색" />
    </CoinSearchContainer>
  );
}

export default CoinSearch;
