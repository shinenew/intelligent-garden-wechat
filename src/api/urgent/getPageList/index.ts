import IReturnResult from "@/constant/DataModel/IReturnResult";
import HttpMethod from "@/constant/Enum/HttpMethod";
import Urls from "@/constant/Urls";
import http from "@/utils/ajaxUtil";
import IOptions from "./IOptions";
import IData from "./IData";

/**
 * 获取应急事件列表
 */
export default async (option?: IOptions): Promise<IReturnResult<IData>> => {
  return await http.request(HttpMethod.GET, Urls.getUrgentList, option);
};