// import { AxiosResponse } from "axios";
// import postGoogleOAuth from "@/apis/auth";
// import { UserType } from "@/recoils/user/atom";
import { useEffect } from "react";
import useUserState from "@/hooks/recoilHooks/useUserState";

function Redirect() {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  console.log(window.location);
  console.log(parsedHash);
  console.log(accessToken);

  const { login } = useUserState();
  useEffect(() => {
    const newUser = {
      userId: 1,
      nickname: "Hot-ttu",
      profileUrl:
        "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/320/e549ece10c7c8feb2d3feefdfe69bb11_res.jpeg",
      accessToken: "access",
      refreshToken: "refresh",
    };
    localStorage.setItem("userInfo", JSON.stringify(newUser));
    login(newUser);
  }, []);

  // postGoogleOAuth((res: AxiosResponse<UserType>) => {
  //   console.log(res);
  //   console.log(res.data);
  // }, accessToken);
  return <div>redirect</div>;
}

export default Redirect;
