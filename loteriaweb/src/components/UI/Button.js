import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "button"}
      disabled={props.disabled}
      className={classes.button}
      onClick={props.onClick}
      style={{ backgroundColor: props.color ? props.color : "" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
