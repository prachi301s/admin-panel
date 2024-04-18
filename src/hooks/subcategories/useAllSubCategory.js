import { useQuery } from "react-query";
import { Axios } from "../../axios/axios";



function getAllSubCategory({ queryKey }) {
  // console.log("queryKey---",queryKey)
//   const [_, page, limit,] = queryKey;
  return Axios.get(`/view_all_subcategory`);
//   return Axios.get(`/view_all_category?limit=${limit}&page=${page}`);
}
export function useGetAllSubCategory() {
  return useQuery(["all_subcategory"], getAllSubCategory);
}
