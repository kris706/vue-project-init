import axios from 'axios'
import { Message } from 'element-ui'
import baseURL from './url'
// import { getToken } from '@/utils/auth'
import Config from '@/config'

// axios 配置
const fetch = axios.create({
  baseURL: baseURL,
  timeout: Config.timeout,
  withCredentials: true
})

// 请求拦截器
fetch.interceptors.request.use(
  config => {
    // 获取token
    // const token = sessionStorage.getItem('token') || ''

    // 接口公共的请求参数 
    let para = {
      lang: sessionStorage.getItem('lang') || 'cn',
      version: '1.0'
    }

    config.data = Object.assign({}, config.data, para)
    config.data = JSON.stringify(config.data)
    // config.headers = {
    //   'Content-Type': 'application/json;charset=utf-8',
    //   'x-access-token': token
    // }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
fetch.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        // 401 token失效
        case 400:
          Message.error({
            message: '请求报文存在语法错误!'
          })
          break

        // 401 token失效
        case 401:
          if (getToken()) {
            // MessageBox.alert('身份信息已过期，请重新登陆', '提示', {
            //   confirmButtonText: '重新登陆',
            //   showClose: false,
            //   type: 'error'
            // }).then(() => {
            //   // store.dispatch('LogOut').then(() => {
            //   //   location.reload() // 为了重新实例化vue-router对象 避免bug
            //   // })
            // })
            Message.error({
              message: '身份信息已过期，请重新登录！'
            })
          }
          break

        // 403 服务器拒绝访问
        case 403:
          Message.error({
            message: '服务器拒绝访问！'
          })
          break

        // 404 访问的资源不存在
        case 404:
          Message.error({
            message: '访问的资源不存在！'
          })
          break

        // 500 服务器错误
        case 500:
          Message.error({
            message: '服务器错误！'
          })
          break
      }
      return Promise.reject(error)
    }
  }
)

// 封装axios的post请求
export function fetchPost(url, data = {}) {
  return new Promise((resolve, reject) => {
    fetch
      .post(url, data)
      .then(response => {
        // console.log(response.data)
        if (response.data.retCode === '0099') {
          sessionStorage.clear()
          window.location.reload()
        } else {
          resolve(response.data)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    fetch
      .get(url, {
        params: params
      })
      .then(res => {
        if (res.data.retCode === '0099') {
          sessionStorage.clear()
          window.location.reload()
        } else {
          resolve(res.data)
        }
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export default fetch
