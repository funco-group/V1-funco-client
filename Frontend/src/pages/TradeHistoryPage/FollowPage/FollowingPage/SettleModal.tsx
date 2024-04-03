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
import { useState } from "react";
import AlertModal from "@/components/common/Modal/AlertModal";

function SettleModal() {
  const [alert, setAlert] = useState<boolean>(false);
  const { settleModal, offModal } = useSettleModalState();
  if (!settleModal) {
    return null;
  }
  // console.log(settleModal.followId);

  const handleCancelClick = () => {
    offModal();
  };

  const handleSettleClick = () => {
    removeFollow(settleModal?.followId, () => {
      offModal();
      setAlert(true);
    });
  };

  const closeAlert = () => {
    setAlert(false);
  };

  if (!settleModal) {
    return null;
  }
  return (
    <>
      {alert && (
        <AlertModal
          title="알림"
          content="정산이 완료되었습니다."
          closeAlert={closeAlert}
        />
      )}

      <SettleModalBackgroundContainer>
        <SettleModalContainer>
          <SettleModalTitleDiv>정산</SettleModalTitleDiv>
          <SettleModalContentDiv>
            <SettleModalContentRowDiv>
              <div>금액</div>
              <div>
                <span>
                  {settleModal.estimatedValue.toLocaleString("ko-KR")}
                </span>{" "}
                WON
              </div>
            </SettleModalContentRowDiv>
            <SettleModalContentRowDiv>
              <div>- 수수료</div>
              <div>
                <span>{settleModal.commission.toLocaleString("ko-KR")}</span>{" "}
                WON
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
                WON
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
    </>
  );
}

export default SettleModal;
