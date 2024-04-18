import { Axios } from 'src/axios/axios';

import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  // this is for the refresh token if the access token will expired then the new refresh token will be generated
  const refresh = async () => {
    const response = await Axios.get('/users/refresh-token', {
      withCredentials: true,
    });

    // console.log("response-refresh", response);
    // setAuth((prev) => {
    //    // console.log("refresh", JSON.stringify(prev));
    //    // console.log("refresh", response?.data?.accessToken);
    //    return { ...prev, accessToken: response?.data?.accessToken };
    // });
    // console.log(
    //    "🚀 ~ file: useRefreshToken.js:21 ~ refresh ~ response?.data?.accessToken:",
    //    response?.data?.accessToken
    // );

    // return response?.data?.accessToken;
    const user_id = response?.data?.result.id;
    const user_email = response?.data?.result.email;
    const accessToken = response?.data?.accessToken;

    setAuth((prevState) => ({
      ...prevState,
      user_id,
      user_email,
      accessToken,
    }));
  };
  return refresh;
};

export default useRefreshToken;
