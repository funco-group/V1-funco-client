import { EventSourcePolyfill } from "event-source-polyfill";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { UserType } from "@/interfaces/user/UserType";
import useUserState from "./recoilHooks/useUserState";

interface ResMessageType {
  unReadCount: number;
  message: string;
  notificationDate: string;
}

function useSSE(setUnReadCount: Dispatch<SetStateAction<number>>) {
  const { user } = useUserState();
  useEffect(() => {
    let eventSource: EventSourcePolyfill;

    const fetchSSE = () => {
      const userInfo = localStorage.getItem("userInfo");
      const userInLS: UserType = userInfo ? JSON.parse(userInfo) : null;
      const accessToken = userInLS ? userInLS.accessToken : null;

      eventSource = new EventSourcePolyfill(
        `${import.meta.env.VITE_BASE_URL}/v1/notifications/subscribe`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        },
      );

      eventSource.onopen = () => {
        console.log("연결됐어요");
      };

      eventSource.onmessage = async (e) => {
        const res = await e.data;
        const parsedData = JSON.parse(res) as ResMessageType;

        const newUnReadCount =
          parsedData.unReadCount > 99 ? 99 : parsedData.unReadCount;

        setUnReadCount(newUnReadCount);

        toast(parsedData.message);
        console.log(parsedData);
      };

      eventSource.onerror = (e) => {
        console.log("Error", e);
        eventSource.close();
        // 재연결 로직: 1초 후에 다시 시도
        // setTimeout(fetchSSE, 1000);
      };
    };
    if (user) {
      fetchSSE();
    }

    // 컴포넌트 언마운트 시 연결 종료
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []); // 의존성 배열이 비어 있으므로, 마운트될 때 한 번만 실행됩니다.
}

export default useSSE;
