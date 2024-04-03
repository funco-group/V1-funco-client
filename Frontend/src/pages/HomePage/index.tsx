import HomePageButtonComponent from "./HomePageButtonComponent";
import { HomePageColumnGridDiv, HomePageRowGridDiv } from "./styled";

function Index() {
  return (
    <HomePageColumnGridDiv>
      <div></div>
      <HomePageRowGridDiv>
        <div style={{ backgroundColor: "gray" }}>
          <HomePageButtonComponent
            direction="left"
            margin="1.875rem auto auto auto"
          />
        </div>
        <div style={{ backgroundColor: "blue" }}>
          <HomePageButtonComponent
            direction="left"
            margin="80px auto auto 2.5rem"
          />
        </div>
      </HomePageRowGridDiv>
      <div style={{ backgroundColor: "red" }}>화면 미리보기</div>
      <HomePageRowGridDiv>
        <div style={{ backgroundColor: "green" }}>
          <HomePageButtonComponent
            direction="right"
            margin="80px auto auto 2.5rem"
          />
        </div>
        <div style={{ backgroundColor: "purple" }}>
          <HomePageButtonComponent
            direction="right"
            margin="80px auto auto 2.5rem"
          />
        </div>
      </HomePageRowGridDiv>
      <div></div>
    </HomePageColumnGridDiv>
  );
}

export default Index;
