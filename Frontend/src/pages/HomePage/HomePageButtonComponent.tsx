import {
  HomePageButton,
  HomePageButtonContentDiv,
  HomePageButtonFlexDiv,
  HomePageButtonTitleDiv,
} from "./HomePageButtonComponent.styled";
import buttonImage from "@/assets/icon/eclipse-button.svg";

interface HomePageButtonComponentProps {
  direction: "left" | "right";
  margin: string;
}

function HomePageButtonComponent({
  direction,
  margin,
}: HomePageButtonComponentProps) {
  return (
    <HomePageButton direction={direction} margin={margin}>
      <HomePageButtonFlexDiv direction={direction}>
        {direction === "right" && <img src={buttonImage} alt="home-button" />}
        <div>
          <HomePageButtonTitleDiv>실시간 시세 간편 확인</HomePageButtonTitleDiv>
          <HomePageButtonContentDiv>
            실시간 시세를 확인하기 쉬워요~~
          </HomePageButtonContentDiv>
        </div>
        {direction === "left" && <img src={buttonImage} alt="home-button" />}
      </HomePageButtonFlexDiv>
    </HomePageButton>
  );
}

export default HomePageButtonComponent;
