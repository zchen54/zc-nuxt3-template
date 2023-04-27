import Http from '@/utils/request'
 
export const getRegisterConfig = (params?: any) => {
    return Http.get('/base/config/register', params)
}