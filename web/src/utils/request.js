import axios from 'axios'
import { MessageBox } from 'mint-ui';

const instance = axios.create({
  timeout: 3000,
  baseURL: '/api/'
});

instance.interceptors.response.use(response => {
  const res = response.data;
  return res;
}, error => {
  // 当服务器出错时统一报错
  MessageBox('提示', '服务器异常，请稍后再试');
  return Promise.reject(error);
});

export default instance