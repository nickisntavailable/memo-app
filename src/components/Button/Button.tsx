import { ReactChild } from "react";
import "./Button.scss";

type ButtonProps = {
  classes?: string;
  children: ReactChild;
  onClick?: () => void
};

const Button = ({ classes, children, onClick }: ButtonProps) => {
  return <button className={`btn ${classes ? classes : ''}`} onClick={onClick}>
      {children}
  </button>;
};

export default Button;
