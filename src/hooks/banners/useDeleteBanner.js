import { useMutation } from "react-query";
import { Axios } from "../../axios/axios";

function delBanners(id) {
  console.log("delete", id);
  return Axios.delete(`/delete_banner/${id}`);
}

export default function useDeleteBanner() {
  return useMutation(delBanners);
}
