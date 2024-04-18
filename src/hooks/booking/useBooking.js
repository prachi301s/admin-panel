import { useQuery } from "react-query";
import { Axios } from "../../axios/axios";




function getAllBooking({ queryKey }) {
  // console.log("queryKey---",queryKey)
  const [_,] = queryKey;
//   console.log(page);
  return Axios.get(`/get_all_booking`);
}
export function useAllBooking() {
  return useQuery(["all_booking"], getAllBooking);
}
