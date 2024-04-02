import { AxiosResponse } from "axios";
import localAxios from "@/utils/http-commons";
import { DailyStatisticsType } from "@/interfaces/StatisticsType";

const domain = "statistics";
const version = "v1";

export async function getDailyStatistics(
  year: number,
  month: number,
  success: (response: AxiosResponse<DailyStatisticsType[]>) => void,
) {
  await localAxios
    .get(`/${version}/${domain}/daily?year=${year}&month=${month}`)
    .then(success);
}

export async function getMonthlyStatistics(
  year: number,
  success: (response: AxiosResponse<DailyStatisticsType[]>) => void,
) {
  await localAxios
    .get(`/${version}/${domain}/monthly?year=${year}`)
    .then(success);
}
