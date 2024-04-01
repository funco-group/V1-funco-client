import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  RankArrowDiv,
  RankPaginationButton,
  RankPaginationContainer,
  RankPaginationDiv,
} from "./RankPagination.styled";
import leftArrow from "@/assets/icon/pagination-arrow-left.svg";
import rightArrow from "@/assets/icon/pagination-arrow-right.svg";

interface RankPaginationProps {
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

function RankPagination({
  nowPage,
  setNowPage,
  totalPage,
}: RankPaginationProps) {
  const [pageList, setPageList] = useState([1]);

  useEffect(() => {
    const startPage = Math.floor(nowPage / 5) * 5;
    const newPageList = [];

    for (let i = startPage; i < startPage + 5 && i < totalPage; i += 1) {
      newPageList.push(i + 1);
    }

    setPageList(newPageList);
  }, [nowPage, totalPage]);

  const handlePaginationClick = (selectedPageNum: number) => {
    setNowPage(selectedPageNum - 1);
  };

  const handlePaginationPrevArrowClick = () => {
    const prevPage = Math.floor(nowPage / 5) * 5 - 1;
    if (prevPage >= 0) {
      setNowPage(prevPage);
    } else {
      alert("더 이상 없습니다");
    }
  };

  const handlePaginationNextArrowClick = () => {
    const nextPage = Math.ceil((nowPage + 1) / 5) * 5;
    if (nextPage <= totalPage) {
      setNowPage(nextPage);
    } else {
      alert("더 이상 없습니다");
    }
  };

  return (
    <RankPaginationContainer>
      <RankPaginationDiv>
        <RankArrowDiv onClick={handlePaginationPrevArrowClick}>
          <img
            src={leftArrow}
            alt="rank-pagination-left-arrow"
            draggable={false}
          />
        </RankArrowDiv>
        {pageList.map((pageNum) => (
          <RankPaginationButton
            key={pageNum}
            $active={pageNum - 1 === nowPage}
            onClick={() => handlePaginationClick(pageNum)}
          >
            {pageNum}
          </RankPaginationButton>
        ))}
        <RankArrowDiv onClick={handlePaginationNextArrowClick}>
          <img
            src={rightArrow}
            alt="rank-pagination-right-arrow"
            draggable={false}
          />
        </RankArrowDiv>
      </RankPaginationDiv>
    </RankPaginationContainer>
  );
}

export default RankPagination;
