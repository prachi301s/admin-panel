import { useMutation } from "react-query";
import { Axios } from "src/axios/axios";


function getEmailVerification(user) {
  console.log(user);
  return Axios.post("/forgotPassword", user);
}

export function useForgotPassword() {
  return useMutation(getEmailVerification);
}




// function updateResetPassword(userData) {
//   console.log("userData::", userData);
//   const { token, new_password, confirm_password } = userData;
//   let passwordData = {
//     new_password,
//     confirm_password,
//   };
//   return Axios.post(`/resetPassword/${token}`, passwordData);
// }

// export function useResetPassword() {
//   return useMutation(updateResetPassword);
// }
