import DashboardView from "../pages/admin/dashboard/DashboardView";
import Setting from "../pages/admin/setting/Setting";
import Category from "../pages/admin/category/Category";
import SubCategory from "../pages/admin/subcategory/SubCategory";
import Payment from "../pages/admin/payment/Payment";
import Earning from "../pages/admin/earning/Earning";
import Service from "../pages/admin/service/Service";
import Customer from "../pages/admin/customer/Customer";
import Expert from "../pages/admin/experts/Expert";
import Booking from "../pages/admin/booking/Booking";
import Banner from "../pages/admin/banner/Banner";

import Withdraw from "../pages/admin/withdraw/Withdraw";
import CaProfileIndex from "../pages/admin/experts/caprofileviewform/CaProfileIndex" 
import CaChatView from "../pages/admin/experts/caprofileviewform/cachats/CaChatView";


export const admin_routes=[
    {path:'/admin',element:<DashboardView/>},
    { path: '/admin/banner', element: <Banner/> },
    { path: '/admin/setting', element: <Setting/> },
    { path: '/admin/category', element:<Category/> },

    // { path: '/admin/support', element: <UserPage /> },
    { path: '/admin/subcategory', element: <SubCategory/> },
    { path: '/admin/payment-history', element: <Payment/> },
    { path: '/admin/earning', element: <Earning/> },
    { path: '/admin/withdraw', element: <Withdraw/> },
    { path: '/admin/service', element: <Service/> },
    { path: '/admin/customer', element: <Customer /> },
    { path: '/admin/expert', element: <Expert/> },
    { path: '/admin/booking', element: <Booking/> },
    { path: '/admin/ca-profile-view', element: <CaProfileIndex/> },
    { path: '/admin/ca-chat-view', element: <CaChatView/> },
   
]