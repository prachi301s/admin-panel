// import { useMutation, useQuery } from "react-query";
// import { Axios } from "../../axios/axios";

// const addSubCategory = async (categoryData) => {
//   console.log("queryKey---", categoryData);
//   try {
//     const formData = new FormData();
//     formData.append("category_name", categoryData.category_name);
//     formData.append("image", categoryData.image);
//     formData.append("description", categoryData.description);
//     formData.append("status", categoryData.status);
//     return await Axios.post(`/add_subcategory`, formData);
//   } catch (err) {
//     console.log(err);
//   }
// };
// export function useAddSubCategory() {
//   return useMutation(["all_subcategory"], addSubCategory);
// }
