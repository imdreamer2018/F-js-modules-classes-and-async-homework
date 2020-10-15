import getURL from "./utils";
import * as constant from "./constant";

export const url = getURL(constant.ADDRESS, constant.PORT, constant.PATH);

export const region = constant.REGION;
