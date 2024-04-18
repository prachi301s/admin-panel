import { useMutation, useQuery } from "react-query";
import { Axios } from "../../axios/axios";

const getCustomerById = async (customerData) => {
  console.log("queryKey---", customerData);
  try {
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("user_id", customerData.customer_id);
    return await Axios.post("/view_users", formData);
  } catch (err) {
    console.log(err);
  }
  //   const [_] = queryKey;
  //   console.log(page);
};

export function useCustomerById() {
  return useMutation(["customer_by_id"], getCustomerById);
}
// const addAccounts = async (addToAccData) => {
//   const { acc_name, acc_email, acc_image, acc_password } = addToAccData;
//   console.log(acc_name, acc_email, acc_image, acc_password);
//   try {
//     // Create a FormData object to handle file uploads
//     const formData = new FormData();
//     formData.append("first_name", acc_name);
//     formData.append("email", acc_email);
//     formData.append("password", acc_password);
//     formData.append("profile_pic", acc_image);
//     for (const pair of formData.entries()) {
//       console.log(`${pair[0]}, ${pair[1]}`);
//     }
//     return await Axios.post("/Add_accounts", formData);
//   } catch (err) {
//     console.log(err);
//   }
// };
