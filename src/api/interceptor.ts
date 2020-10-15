import axios from "axios";

const serviceConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
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
