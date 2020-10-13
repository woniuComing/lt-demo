import request from "./request";

export const getTop = () => {
  return request.get("QA/questions/isTop", {});
};
