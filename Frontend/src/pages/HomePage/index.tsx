import { useEffect, useState } from "react";
import HomePageButtonComponent from "./HomePageButtonComponent";
import {
  HomePageColumnGridDiv,
  HomePageFlexDiv,
  HomePageRowGridDiv,
  PreviewDiv,
  PreviewImage,
  PreviewInnerDiv,
} from "./styled";
import preview0 from "@/assets/icon/preview0.png";
import preview1 from "@/assets/icon/preview1.png";
import preview2 from "@/assets/icon/preview2.png";
import preview3 from "@/assets/icon/preview3.png";

function Index() {
  const [nowTabNumber, setNowTabNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNowTabNumber((nowTabNumber + 1) % 4);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [nowTabNumber]);

  const bgList = [preview0, preview1, preview2, preview3];

  return (
    <HomePageColumnGridDiv>
      <div />
      <HomePageRowGridDiv>
        <HomePageFlexDiv direction="right">
          <HomePageButtonComponent
            nowTabNumber={nowTabNumber}
            setNowTabNumber={setNowTabNumber}
            number={0}
          />
        </HomePageFlexDiv>
        <HomePageFlexDiv direction="right">
          <HomePageButtonComponent
            nowTabNumber={nowTabNumber}
            setNowTabNumber={setNowTabNumber}
            number={3}
          />
        </HomePageFlexDiv>
      </HomePageRowGridDiv>
      <PreviewDiv>
        <PreviewInnerDiv>
          <PreviewImage
            src={bgList[nowTabNumber]}
            alt="home-bg"
            style={{ opacity: 1 }}
          />
        </PreviewInnerDiv>
      </PreviewDiv>
      <HomePageRowGridDiv>
        <HomePageFlexDiv direction="left">
          <HomePageButtonComponent
            nowTabNumber={nowTabNumber}
            setNowTabNumber={setNowTabNumber}
            number={1}
          />
        </HomePageFlexDiv>
        <HomePageFlexDiv direction="left">
          <HomePageButtonComponent
            nowTabNumber={nowTabNumber}
            setNowTabNumber={setNowTabNumber}
            number={2}
          />
        </HomePageFlexDiv>
      </HomePageRowGridDiv>
      <div />
    </HomePageColumnGridDiv>
  );
}

export default Index;
