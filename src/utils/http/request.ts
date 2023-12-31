import axios from 'axios';
import { BaseResponse } from './response';
import { CANCEL } from 'redux-saga';
import { authAxios } from 'config/axios';

export const baseDomain = 'https://ttvnapi.com';

export const apiGetV2 = async (url: string, header?: any) => {
  const source = axios.CancelToken.source();
  try {
    const promise = authAxios.get(url, {
      headers: header,
      cancelToken: source.token,
    });

    promise[CANCEL] = () => source.cancel();
    return promise;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error: ', error.message);
    } else {
      console.log('error: ', 'undefined');
    }
    const response: BaseResponse = {
      data: undefined,
      error: 1,
      message: 'system_error',
    };
    return response;
  }
};

export const apiPostV2 = (url: string, payload?: any, header?: any) => {
  const source = axios.CancelToken.source();
  try {
    const promise = authAxios.post<BaseResponse>(url, payload, {
      headers: header,
      cancelToken: source.token,
    });

    promise[CANCEL] = () => source.cancel();
    return promise;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error: ', error.message);
    } else {
      console.log('error: ', 'undefined');
    }
    const response: BaseResponse = {
      data: undefined,
      error: 1,
      message: 'system_error',
    };
    return response;
  }
};
