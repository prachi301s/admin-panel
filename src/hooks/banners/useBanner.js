import { useQuery } from "react-query";
import { Axios } from "../../axios/axios";


function getBanners({ queryKey }) {
  // console.log("queryKey---",queryKey)
  const [_, page, limit,] = queryKey;
  console.log(page);
  return Axios.get(`/get_banner_images?page=${page}&limit=${limit}`);
}
export function useBanner(page = 1, limit = 10,) {
  return useQuery(["all_banners", page, limit, ], getBanners);
}
