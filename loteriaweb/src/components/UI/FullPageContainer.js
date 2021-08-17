import classes from "./FullPage.module.css";

const FullPageContainer = (props) => {
  return <div className={classes.full}>{props.children}</div>;
};

export default FullPageContainer;
