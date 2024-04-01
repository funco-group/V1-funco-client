import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import useFollowModalState from "@/hooks/recoilHooks/useFollowModalState";
import {
  SettleModalBackgroundContainer,
  SettleModalContainer,
  SettleModalContentButtonRowDiv,
  SettleModalTitleDiv,
} from "../TradeHistoryPage/FollowPage/FollowingPage/SettleModal.styled";
import {
  FollowModalContentDiv,
  FollowModalTermsDiv,
} from "./FollowModal.styled";
import BrandButtonComponent from "@/components/common/Button/BrandButtonComponent";
import palette from "@/lib/palette";
import BrandButton from "@/components/common/Button/BrandButtonComponent.styled";
import { addFollow } from "@/apis/follow";

function FollowModal() {
  const { followModal, offFollowModal } = useFollowModalState();
  const [cash, setCash] = useState<number>(0);
  const [investment, setinvestment] = useState("");
  const [isCheckTerms, setIsCheckTerms] = useState(false);

  useEffect(() => {
    setCash(50000000);
  }, []);

  if (!followModal) {
    return null;
  }

  const handleInvestmentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInvestment = e.target.value;
    const newInvestmentNum = Number(newInvestment.replace(/,/g, ""));
    if (Number.isNaN(newInvestmentNum)) {
      setinvestment("0");
    } else if (newInvestmentNum > cash) {
      alert("가용 자산을 넘겨서 투자할 수 없습니다.");
      setinvestment("0");
    } else {
      setinvestment(newInvestmentNum.toLocaleString("en-US"));
    }
  };

  const handleCheckInputClick = () => {
    setIsCheckTerms((prev) => !prev);
  };

  const handleCancelClick = () => {
    offFollowModal();
  };

  const handleFollowClick = () => {
    addFollow({
      memberId: followModal?.memberId,
      investment: Number(investment.replace(/,/g, "")),
    });
    offFollowModal();
  };

  return (
    <SettleModalBackgroundContainer>
      <SettleModalContainer>
        <SettleModalTitleDiv>팔로우</SettleModalTitleDiv>
        <FollowModalContentDiv>
          <FollowModalTermsDiv>대충 따라가면 너네 책임</FollowModalTermsDiv>
          <label htmlFor="check">
            <input
              className="checkInput"
              type="checkbox"
              id="check"
              onChange={handleCheckInputClick}
            />
            약관에 동의합니다.
          </label>
          {/* <div class="check_wrap">
            <input type="checkbox" id="check_btn" />
            <label for="check_btn">
              <span>선택!</span>
            </label>
          </div> */}
          <label htmlFor="cash">
            가용 자산
            <input
              className="cash"
              type="text"
              id="cash"
              disabled
              value={cash?.toLocaleString("en-US")}
            />
            won
          </label>

          <label htmlFor="investment">
            투자 금액
            <input
              className="investment"
              type="text"
              id="investment"
              value={investment}
              onChange={handleInvestmentInput}
              autoComplete="off"
            />
            won
          </label>
        </FollowModalContentDiv>
        <SettleModalContentButtonRowDiv>
          <BrandButtonComponent
            content="취소"
            color={null}
            cancel
            onClick={handleCancelClick}
            disabled={false}
          />
          <BrandButton
            color={null}
            $cancel={false}
            onClick={handleFollowClick}
            disabled={!isCheckTerms}
            data-tooltip-content="약관에 동의하여 주세요"
            data-tooltip-id={isCheckTerms ? "" : "buttonTooltip"}
          >
            팔로우
          </BrandButton>
          <Tooltip
            id="buttonTooltip"
            style={{ backgroundColor: palette.brandColor }}
            // arrowColor="transparent"
            place="top"
            // float
          />
        </SettleModalContentButtonRowDiv>
      </SettleModalContainer>
    </SettleModalBackgroundContainer>
  );
}

export default FollowModal;
