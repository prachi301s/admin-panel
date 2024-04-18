import { useQuery } from "react-query";
import { Axios } from "../../../src/axios/axios";



function getCaExpert({ queryKey }) {
  console.log("queryKey---",queryKey)
//   const [_, page, limit,] = queryKey;
  return Axios.get(`/expert_list`);
}
export function useCaExpert() {
  return useQuery(["all_expertList" ], getCaExpert);
}


// import { useQuery } from "react-query";
// import { Axios } from "../../../src/axios/axios";

// function getCaExpertListData({ queryKey }) {
//   const user_type = queryKey[2];

//   return Axios.get(`/expert_list?user_type=${user_type}`);
// }
// export default function useCaExpert(ca_user_type) {
//   return useQuery(["caExpert_list", ca_user_type], getCaExpertListData, {
//     enabled: Boolean(ca_user_type)
//   })

// }

