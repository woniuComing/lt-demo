import instance from "./interceptor";

// options: {
//     mock: Boolean;
//     error: Boolean;
//  },
function request(
  url: String,
  params: Object,

  method: String
) {
  //   let { mock = false, error = true } = options;
  return new Promise((resolve, reject) => {
    let data = {};
    // get请求使用params字段
    if (method === "get") {
      data = {
        params
      };
    }
    // post请求使用data字段
    if (method === "post") {
      data = {
        data
      };
    }
    // 通过mock平台可对局部接口进行mock设置
    // if (mock) url = "";
    instance({
      url,
      method,
      ...data
    })
      .then(res => {
        console.log(res);
        if (res.status === 0) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        // loadingInstance.close();
      });
  });
}
// 封装GET请求
function get(url, params) {
  return request(url, (params = {}), "get");
}
// 封装POST请求
function post(url, params) {
  return request(url, params, "post");
}
export default {
  get,
  post
};
