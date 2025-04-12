import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelpCircle, Sidebar } from "lucide-react";
import SideNavigation from './user side/components/sidebar';
import Paste from './user side/pages/paste';
import Telephone from './user side/pages/flowchart';
import Dashboard from "./user side/pages/dashtop";
import Cart from "./user side/pages/cart";
import Binance from "./user side/pages/Binance";
import Settings from "./user side/pages/Settings";
import SettingComponent from "./user side/components/settingcomponent";
import Help from "./Admin side/pages/help";
import Logout from "./Admin side/pages/Logout";
import Adminlogin from "./Admin side/pages/adminlogin";
import SideNavigation2 from "./Admin side/component/Sidenavigaction2";
import ClintAccounts from "./Admin side/pages/ClintAccounts";
import ClintDetails from "./Admin side/pages/ClintDetails";
import Clintmanagement from "./Admin side/pages/Clintmanagement";
import Wallettracastion from "./Admin side/pages/Wallettracastion";
import Homepage from "./user side/pages/homepage";
import Deshboard2 from "./Admin side/pages/Dashboard"
function App() {
  return (
    <Router>
      {/* <SideNavigation2 /> */}
      <Routes>
        {/* User side routes */}
        <Route path="/" element={<Homepage/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paste" element={<Paste />} />
        <Route path="/telephone" element={<Telephone />} />
        <Route path="/binance" element={<Binance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/setting1" element={<SettingComponent />} />
        
        {/* Admin side routes */}
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/Admindeshboard" element={<Deshboard2/>} />
        <Route path="/client-accounts" element={<ClintAccounts />} />
        <Route path="/client-management" element={<Clintmanagement />} />
        <Route path="/client-details" element={<ClintDetails />} />
        <Route path="/wallet" element={<Wallettracastion />} />
        <Route path="/plan-management" element={<Clintmanagement />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;