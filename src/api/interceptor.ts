import axios from "axios";
// https://lt.lenovo.com.cn/iip/api/v2
const serviceConfig = {
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "content-type": "application/json;charset=UTF-8"
  }
};

const instance = axios.create(serviceConfig);

// 请求拦截
instance.interceptors.request.use(config => {
  return config;
});
// 返回拦截
instance.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.err_code === 0) {
      return res;
    } else {
      console.log(res);
      // return res;
    }
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
