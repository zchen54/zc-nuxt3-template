import { ElMessage } from 'element-plus'

const fetch = (url: string, options?: any): Promise<any> => {
  const token = useCookie('token')
  const headers = {
    // headers信息
    // Authorization: `Bearer ${token.value}`,
  }
  const reqUrl = import.meta.env.VITE_REQUEST_BASE_URL + url
  return new Promise((resolve, reject) => {
    console.log('fetch', reqUrl, { ...options, headers })
    useFetch(reqUrl, { ...options, headers })
      .then(({ data }: any) => {
        if (data._rawValue) {
          if (data._rawValue.code === 200) {
            resolve(data._rawValue.data)
          } else if (data._rawValue.msg) {
            ElMessage({
              message: data._rawValue.msg,
              type: 'error',
            })
            reject(data._rawValue)
          } else {
            ElMessage({
              message: `${reqUrl} 接口异常`,
              type: 'error',
            })
            reject(data._rawValue)
          }
        } else {
          ElMessage({
            message: `${reqUrl} 接口异常`,
            type: 'error',
          })
          reject(data._rawValue)
        }
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default new (class Http {
  get(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'get', params })
  }

  post(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'post', params })
  }

  put(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'delete', body })
  }
})()
