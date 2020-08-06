import axios from '@/util/request'

export function getListApi(params) {
  return axios.get('/list',{params})
}