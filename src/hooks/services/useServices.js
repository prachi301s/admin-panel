import { useQuery } from "react-query";
import { Axios } from "../../axios/axios";

function getAllServices({ queryKey }) {
  // console.log("queryKey---",queryKey)
  const [_] = queryKey;
  //   console.log(page);
  return Axios.get("/total_user");
}
export function useAllServices() {
  return useQuery(["get_all_services"], getAllServices);
}
