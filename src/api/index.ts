import axios from "./interceptor";

//置顶
export const getTop = () => {
  return axios.get("/QA/questions/isTop");
};

//首页
export const getFirstPage = () => {
  return axios.get("/qa/questions/page/1/1");
};

//更多页面
export const getMorePage = (pagenum: Number) => {
  return axios.get(`/qa/questions/page/${pagenum}/1`);
};
