import DownArrowIcon from "@/ui/icons/DownArrowIcon";
import NotificationIcon from "@/ui/icons/NotificationIcon";

const AdminNavbar = () => {
  return (
    <nav className="nav">
      <div className="flex">
        <NotificationIcon />
        <p className="nav-notification-dot">.</p>
      </div>

      <span className="nav-image"></span>

      <div className="">
        <DownArrowIcon />
      </div>
    </nav>
  );
};

export default AdminNavbar;
