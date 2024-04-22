// import { useMutation, useQuery } from "react-query";
// import { Axios } from "../../axios/axios";

// const addCategory = async (categoryData) => {
//   console.log("queryKey---", categoryData);
//   try {
//     const formData = new FormData();
//     formData.append("category_name", categoryData.category_name);
//     formData.append("image", categoryData.image);
//     formData.append("description", categoryData.description);
//     formData.append("status", categoryData.status);
//     return await Axios.post(`/add_category`, formData);
//   } catch (err) {
//     console.log(err);
//   }
// };
// export function useAddCategory() {
//   return useMutation(["all_category"], addCategory);
// }
