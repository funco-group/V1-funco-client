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

function SettleModal() {
  const { settleModal, offModal } = useSettleModalState();

  const handleCancelClick = () => {
    offModal();
  };

  const handleSettleClick = () => {
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
            <p>금액</p>
            <p>
              <span>{settleModal.estimatedValue.toLocaleString("en-US")}</span>{" "}
              won
            </p>
          </SettleModalContentRowDiv>
          <SettleModalContentRowDiv>
            <p>- 수수료</p>
            <p>
              <span>{settleModal.commission.toLocaleString("en-US")}</span> won
            </p>
          </SettleModalContentRowDiv>
          <SettleModalContentRowDiv>
            <p>최종 정산 금액</p>
            <p>
              <span>
                {(
                  settleModal.estimatedValue - settleModal.commission
                ).toLocaleString("en-US")}
              </span>{" "}
              won
            </p>
          </SettleModalContentRowDiv>
        </SettleModalContentDiv>
        <SettleModalContentButtonRowDiv>
          <BrandButtonComponent
            content="취소"
            color={null}
            cancel
            onClick={handleCancelClick}
          />
          <BrandButtonComponent
            content="정산"
            color={palette.brandBlue}
            cancel={false}
            onClick={handleSettleClick}
          />
        </SettleModalContentButtonRowDiv>
      </SettleModalContainer>
    </SettleModalBackgroundContainer>
  );
}

export default SettleModal;
