import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <InventoryOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICES</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"/>
        <div className="colorOptions" />
        <div className="colorOptions"/>
      </div>
    </div>
  );
};

export default Sidebar;
