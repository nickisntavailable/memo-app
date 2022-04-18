import { Link } from "react-router-dom";
import Arrow from "../Icons/Arrow";
import './NavItem.scss';

type NavItemProps = {
  title: string;
  url: string;
};

const NavItem = ({ title, url }: NavItemProps) => {
    return (
       <Link to={url} className="nav-item">
           {title}
           <Arrow/>
       </Link>
    )
};

export default NavItem;
