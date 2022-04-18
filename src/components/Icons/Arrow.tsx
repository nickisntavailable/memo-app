import "./Arrow.scss";

type ArrowProps = {
  classes?: string
}

const Arrow = ({classes}: ArrowProps) => {
  return <div className={`arrow-right ${classes}`}></div>;
};
export default Arrow;
