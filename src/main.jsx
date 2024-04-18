import { Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

import { Provider } from "react-redux";


import { UserProvider } from "./store/StateProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import rootReducer from "./store/combineReducers";

import App from "./App";
// ----------------------------------------------------------------------

const store = createStore(rootReducer);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Suspense>
          <UserProvider>
          <App/>
            <ToastContainer
              // position="top-left"
              position="top-center"
              autoClose={3000}
              // hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover
              theme="light"
            />
          </UserProvider>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
