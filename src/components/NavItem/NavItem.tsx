import { Link } from "react-router-dom";
import ArrowRight from "../Icons/ArrowRight";
import './NavItem.scss';

type NavItemProps = {
  title: string;
  url: string;
};

const NavItem = ({ title, url }: NavItemProps) => {
    return (
       <Link to={url} className="nav-item">
           {title}
           <ArrowRight/>
       </Link>
    )
};

export default NavItem;
