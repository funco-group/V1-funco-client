// import { AxiosResponse } from "axios";
// import postGoogleOAuth from "@/apis/auth";
// import { UserType } from "@/recoils/user/atom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserState from "@/hooks/recoilHooks/useUserState";

function Redirect() {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  const navigate = useNavigate();
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
    login(newUser);
    navigate(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // postGoogleOAuth((res: AxiosResponse<UserType>) => {
  //   console.log(res);
  //   console.log(res.data);
  // }, accessToken);
  return <div>redirect</div>;
}

export default Redirect;
