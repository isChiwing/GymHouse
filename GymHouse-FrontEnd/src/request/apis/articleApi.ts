import { service } from "../service";

//文章列表
export function articleList(page: number) {
  return service.request({
    method: "GET",
    url: "/api/article/articleList",
    params: { page },
  });
}

//发布文章
export function publish(data: {
    title: string;
    type: number;
    author: string;
    text: string;
  }) {
    return service.request({
      method: "POST",
      url: "/api/article/publish",
      data,
    });
  }