
import CallHistory from "../pages/provider/callHistory/CallHistory";
import ChatHistory from "../pages/provider/chatHistory/ChatHistory";
import CaDashboard from "../pages/provider/dashboard/CaDashboard";
import CaBooking from "../pages/provider/booking/CaBooking";
import Wallet from "../pages/provider/wallet/Wallet";
import CaProfile from "../pages/provider/profile/CaProfile";
import Withdrawal from "../pages/provider/withdrawal/Withdrawal";
export const ca_routes = [
  { path: "/provider", element: <CaDashboard /> },
  { path: "/provider/ca/call", element: <CallHistory /> },
  { path: "/provider/ca/chat", element: <ChatHistory /> },
  { path: "/provider/ca/booking", element: <CaBooking /> },
  { path: "/provider/ca/wallet", element: <Wallet /> },
  { path: "/provider/ca/profile", element: <CaProfile /> },
  { path: "/provider/ca/withdrawal", element: <Withdrawal /> },
];
