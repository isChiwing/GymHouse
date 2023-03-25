import { service } from "../service";

export function articleList(page: number) {
  return service.request({
    method: "GET",
    url: "/api/article/articleList",
    params: { page },
  });
}
