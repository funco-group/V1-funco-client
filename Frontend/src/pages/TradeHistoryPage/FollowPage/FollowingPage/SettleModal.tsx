import {
  SettleModalBackgroundContainer,
  SettleModalContainer,
  SettleModalContentButtonRowDiv,
  SettleModalContentDiv,
  SettleModalContentRowDiv,
  SettleModalTitleDiv,
} from "./SettleModal.styled";
import useSettleModalState from "@/hooks/recoilHooks/useSettleModalState";
import BrandButtonComponent from "@/components/common/Button/BrandButtonComponent";
import palette from "@/lib/palette";
import { removeFollow } from "@/apis/follow";

function SettleModal() {
  const { settleModal, offModal } = useSettleModalState();
  if (!settleModal) {
    return null;
  }

  const handleCancelClick = () => {
    offModal();
  };

  const handleSettleClick = () => {
    removeFollow(settleModal?.followId, () => {
      alert("정산 성공!!!!!!!!!!!!!");
    });
    offModal();
  };

  if (!settleModal) {
    return null;
  }
  return (
    <SettleModalBackgroundContainer>
      <SettleModalContainer>
        <SettleModalTitleDiv>정산</SettleModalTitleDiv>
        <SettleModalContentDiv>
          <SettleModalContentRowDiv>
            <div>금액</div>
            <div>
              <span>{settleModal.estimatedValue.toLocaleString("ko-KR")}</span>{" "}
              won
            </div>
          </SettleModalContentRowDiv>
          <SettleModalContentRowDiv>
            <div>- 수수료</div>
            <div>
              <span>{settleModal.commission.toLocaleString("ko-KR")}</span> won
            </div>
          </SettleModalContentRowDiv>
          <SettleModalContentRowDiv>
            <div>최종 정산 금액</div>
            <div>
              <span>
                {(
                  settleModal.estimatedValue - settleModal.commission
                ).toLocaleString("ko-KR")}
              </span>{" "}
              won
            </div>
          </SettleModalContentRowDiv>
        </SettleModalContentDiv>
        <SettleModalContentButtonRowDiv>
          <BrandButtonComponent
            content="취소"
            color={null}
            cancel
            onClick={handleCancelClick}
            disabled={false}
          />
          <BrandButtonComponent
            content="정산"
            color={palette.brandBlue}
            cancel={false}
            onClick={handleSettleClick}
            disabled={false}
          />
        </SettleModalContentButtonRowDiv>
      </SettleModalContainer>
    </SettleModalBackgroundContainer>
  );
}

export default SettleModal;
