import { useMutation } from 'react-query';
import { Axios } from "../../axios/axios";

const addBanner = async (addBannerData) => {
  const { event_name, event_url, event_date, banner_image } = addBannerData;
  console.log(event_name, event_url, event_date, banner_image);
  try {
   
    const formData = new FormData();
    formData.append('event_name', event_name);
    formData.append('event_url', event_url);
    formData.append('event_date', event_date);
    formData.append('banner_image', banner_image);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    return await Axios.post('/add_banner', formData);
  } catch (err) {
    console.log(err);
  }
};

export function useAddBanner() {
  return useMutation(addBanner);
}
