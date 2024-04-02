import { AxiosResponse } from "axios";
import MemberType from "@/interfaces/userPage/MemberType";
import localAxios from "@/utils/http-commons";

const version = "v1";
const domain = "members";

async function getMemberInfo(
  memberId: number,
  success: (res: AxiosResponse<MemberType>) => void,
) {
  await localAxios.get(`/${version}/${domain}/${memberId}`).then(success);
}

export default getMemberInfo;
