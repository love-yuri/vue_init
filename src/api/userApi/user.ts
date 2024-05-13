import { ResponseType, baseApi } from '@/api/baseApi';

export const login = (params: any) => {
  return baseApi({
    method: ResponseType.GET,
    url: '/user/login.php',
    params: params,
  });
};
