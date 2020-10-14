import Mock from "mockjs";

const data = {
  err_code: 0,
  err_msg: "success",
  data: {
    current_pagenum: 1,
    q_list: [],
    img_map: {},
    total_pagenum: 10
  }
};

Mock.mock("/api/QA/questions/isTop", "get", data);
