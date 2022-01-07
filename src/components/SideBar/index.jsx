import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import Logo from "../../assets/dlogo.svg";
import s1 from "../../assets/Vector_77.svg";
import s2 from "../../assets/Vector_76.svg";
import s3 from "../../assets/Group 7055.svg";
import s4 from "../../assets/Group 7021.svg";
const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={Logo} />
      <SideBarIcon icon={s2} />
      <SideBarIcon icon={s3} />
      <SideBarIcon icon={s4} />
      <SideBarIcon icon={s1} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    <img src={icon} alt="React Logo" />
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
