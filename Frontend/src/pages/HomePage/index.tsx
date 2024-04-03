// import { useState } from "react";
import HomePageButtonComponent from "./HomePageButtonComponent";
import { HomePageColumnGridDiv, HomePageRowGridDiv } from "./styled";

function Index() {
  // const [nowTabName, setNowTabName] = useState(0);

  // setInterval(() => {
  //   setNowTabName();
  // });
  return (
    <HomePageColumnGridDiv>
      <div></div>
      <HomePageRowGridDiv>
        <div style={{ backgroundColor: "gray" }}>
          <HomePageButtonComponent
            direction="left"
            margin="5rem auto auto 1.875rem"
          />
        </div>
        <div style={{ backgroundColor: "blue" }}>
          <HomePageButtonComponent
            direction="left"
            margin="5rem auto auto 1.875rem"
          />
        </div>
      </HomePageRowGridDiv>
      <div style={{ backgroundColor: "red" }}>화면 미리보기</div>
      <HomePageRowGridDiv>
        <div style={{ backgroundColor: "green" }}>
          <HomePageButtonComponent
            direction="right"
            margin="5rem auto auto 1.875rem"
          />
        </div>
        <div style={{ backgroundColor: "purple" }}>
          <HomePageButtonComponent
            direction="right"
            margin="5rem auto auto 1.875rem"
          />
        </div>
      </HomePageRowGridDiv>
      <div></div>
    </HomePageColumnGridDiv>
  );
}

export default Index;
