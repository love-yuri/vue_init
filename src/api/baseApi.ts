/*
 * @Author: love-yuri yuri2078170658@gmail.com
 * @Date: 2024-05-13 20:44:52
 * @LastEditTime: 2024-05-13 21:51:21
 * @Description: 基础api
 */
import axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = import.meta.env.VITE_BASE_URL;

export enum ResponseType {
  GET,
  POST,
}

const baseAxios = axios.create({
  baseURL,
  timeout: 5000,
});

export interface RequestConfig {
  url: string;
  method: ResponseType;
  params?: any;
}

export function baseApi(config: RequestConfig): any {
  let fun: Promise<any>;
  switch (config.method) {
    case ResponseType.GET:
      fun = baseAxios.get(config.url, {
        params: config.params,
      });
      break;
    case ResponseType.POST:
      fun = baseAxios.post(config.url, config.params);
      break;
    default:
      break;
  }

  return new Promise((resolve, reject) => {
    fun
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
        ElMessage.error('发生错误 -> ' + err);
      });
  });
}
