import { AxiosResponse } from "axios";
import postGoogleOAuth from "@/apis/auth";
import { UserType } from "@/recoils/user/atom";

function index() {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  console.log(window.location);
  console.log(parsedHash);
  console.log(accessToken);

  // postGoogleOAuth((res: AxiosResponse<UserType>) => {
  //   console.log(res);
  //   console.log(res.data);
  // }, accessToken);
  return <div>redirect</div>;
}

export default index;
