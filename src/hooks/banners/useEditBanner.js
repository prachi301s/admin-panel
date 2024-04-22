import { useMutation } from "react-query";
import { Axios } from "../../axios/axios";

const getEditBanner = async (editBnrData) => {
  try {
    const formData = new FormData();

    formData.append("id", editBnrData.id);
    formData.append("banner_image", editBnrData.banner_image);
    formData.append("event_name", editBnrData.event_name);
    formData.append("event_date", editBnrData.event_date);

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    return await Axios.patch(`/edit_banner?id=${editBnrData.id}`, formData);
  } catch (err) {
    console.log(err);
  }
};
export function useEditBanner() {
  return useMutation(getEditBanner);
}
