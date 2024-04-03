import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { getCash } from "@/apis/asset";
import AlertModal from "@/components/common/Modal/AlertModal";
import MemberType from "@/interfaces/userPage/MemberType";

interface FollowModalProps {
  member: MemberType;
  setMember: Dispatch<SetStateAction<MemberType | undefined>>;
}

function FollowModal({ member, setMember }: FollowModalProps) {
  const { followModal, offFollowModal } = useFollowModalState();
  const [cash, setCash] = useState<number>(0);
  const [investment, setinvestment] = useState("");
  const [isCheckTerms, setIsCheckTerms] = useState(false);

  const [alert, setAlert] = useState<boolean>(false);
  const [alertContent, setAlertContent] = useState<string>("");

  useEffect(() => {
    getCash((res) => {
      const { data } = res;
      setCash(data.cash);
    });
  }, []);

  useEffect(() => {
    if (!alert && alertContent === "팔로우를 시작합니다.") {
      offFollowModal();
    }
  }, [alert]);

  if (!followModal) {
    return null;
  }

  const closeAlert = () => {
    setAlert(false);
  };

  const handleInvestmentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInvestment = e.target.value;
    const newInvestmentNum = Number(newInvestment.replace(/,/g, ""));
    if (Number.isNaN(newInvestmentNum)) {
      setinvestment("0");
    } else if (newInvestmentNum > cash) {
      setAlertContent("가용 자산을 넘겨서 투자할 수 없습니다.");
      setAlert(true);
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
    addFollow(
      {
        memberId: followModal?.memberId,
        investment: Number(investment.replace(/,/g, "")),
      },
      () => {
        setMember({ ...member, isFollow: true });
        setAlertContent("팔로우를 시작합니다.");
        setAlert(true);
      },
    );
  };

  return (
    <SettleModalBackgroundContainer>
      {alert && (
        <AlertModal
          title="알림"
          content={alertContent}
          closeAlert={closeAlert}
        />
      )}
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
          <label htmlFor="cash">
            가용 자산
            <input
              className="cash"
              type="text"
              id="cash"
              disabled
              value={cash?.toLocaleString("en-US")}
            />
            WON
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
            WON
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
            arrowColor="transparent"
            place="top"
            float
          />
        </SettleModalContentButtonRowDiv>
      </SettleModalContainer>
    </SettleModalBackgroundContainer>
  );
}

export default FollowModal;
