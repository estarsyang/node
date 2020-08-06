import axios from '@/utils/request'

export function getListApi(params) {
  return axios.get('/list',{params})
}

export function clockTimeApi(params) {
  return axios.post('/add', params)
}