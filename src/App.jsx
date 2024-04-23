import "./App.css";
import ThemeProvider from "./theme";
// import { PrimaryRoutes, SecondaryRoutes } from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { useUser } from "./store/StateProvider";
import { useEffect } from "react";
import { loginSuccess } from "./store/useAction";
import Login from "./pages/authPages/Login";
// import CaLayout from "./layout/CaLayout";
import MainLayout from "./layout/MainLayout";

function App() {
  const { user } = useUser();
  const dispatch = useDispatch();
  console.log(user);
  // useEffect(() => {
  //   const userData = localStorage.getItem("user_data");
  //   if (userData !== null) {
  //     const userItem = JSON.parse(userData);
  //     // console.log(userItem);
  //     // console.log(userItem);
  //     if (userItem.id !== null && userItem.user_email_id !== null) {
  //       dispatch(loginSuccess(userItem));
  //     }
  //   }
  // }, [dispatch]);

  return (
    <>
      {/* <ThemeProvider>
        {user === null ? (
          <Login />
        ) : (
         
          <>
            {user.user_type === '0' ? (
              <MainLayout/>
            ) : (
              <CaLayout/>
            )}
          </>
        )}
      
       
      </ThemeProvider> */}
      <ThemeProvider>
        {/* <Login/> */}
        <MainLayout/>
      </ThemeProvider>
    </>
  );
}

export default App;
