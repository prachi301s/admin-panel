import { useQuery } from 'react-query';
import { Axios } from "../../axios/axios";

function getAllCustomer({ queryKey }) {
  // console.log("queryKey---",queryKey)
  const [_,] = queryKey;
  //   console.log(page);
  return Axios.get("/total_user");
}
export function useAllCustomer() {
  return useQuery(['all_customer'], getAllCustomer);
}
