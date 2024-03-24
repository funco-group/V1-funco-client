import axios, { AxiosResponse } from "axios";
import { UserType } from "@/recoils/user/atom";

async function postGoogleOAuth(
  success: (res: AxiosResponse<UserType>) => void,
  code: string | null,
) {
  axios
    .post(
      `${import.meta.env.VITE_SERVER_URL}/v1/auth/google/signin?code=${code}`,
    )
    .then(success);
}

export default postGoogleOAuth;
