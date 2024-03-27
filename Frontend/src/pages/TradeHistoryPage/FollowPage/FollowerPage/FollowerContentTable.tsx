import { useEffect, useState } from "react";
import { ColumnContainer, ColumnTitleDiv } from "@/styles/CommonStyled";
import {
  FollowerContentTableContainer,
  FolloweColumnGridDiv,
} from "./FollowerContentTable.styled";
import DummyFollowers from "@/lib/DummyFollowers";
import { FollowerContentType } from "@/interfaces/tradeHistory/follow/FollowerContentType";
import FollowerContent from "./FollowerContent";

function FollowerContentTable({
  nowTabName,
}: {
  nowTabName: "all" | "following" | "settled";
}) {
  const [FollowerContentList, setFollowerContentList] = useState<
    FollowerContentType[]
  >([]);
  const columnList = [
    "팔로우",
    "유저명",
    "투자금액",
    "정산금액",
    "수익률",
    "수수료",
    "정산",
  ];

  useEffect(() => {
    const newFollowContentList = DummyFollowers.get(nowTabName);

    if (newFollowContentList) {
      setFollowerContentList(newFollowContentList);
    }
  }, [nowTabName]);

  return (
    <FollowerContentTableContainer>
      <ColumnContainer>
        <FolloweColumnGridDiv>
          {columnList.map((column) => (
            <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
          ))}
        </FolloweColumnGridDiv>
      </ColumnContainer>
      {FollowerContentList.length ? (
        FollowerContentList.map((content) => (
          <FollowerContent key={content.followId} content={content} />
        ))
      ) : (
        <div>텅~~~~~~~~~~~</div>
      )}
    </FollowerContentTableContainer>
  );
}

export default FollowerContentTable;
