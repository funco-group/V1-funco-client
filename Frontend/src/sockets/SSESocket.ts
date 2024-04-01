import { EventSourcePolyfill } from "event-source-polyfill";
import { UserType } from "@/interfaces/user/UserType";

const fetchSSE = () => {
  const userInfo = localStorage.getItem("userInfo");
  const user: UserType = userInfo ? JSON.parse(userInfo) : null;
  const accessToken = user ? user.accessToken : null;

  const eventSource = new EventSourcePolyfill(
    `${import.meta.env.VITE_BASE_URL}/subscribe`,
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
    const parsedData = JSON.parse(res);
    console.log(parsedData);
  };

  eventSource.onerror = (e) => {
    console.log(e);
    eventSource.close();
  };
};

export default fetchSSE;
