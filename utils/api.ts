import Http from '@/utils/request'

export const getRegisterConfig = (params?: any) => {
  return Http.get('/base/config/register', params)
}

export const submitPurchase = (data: any) => {
  return Http.post('/base/purchase', data)
}
