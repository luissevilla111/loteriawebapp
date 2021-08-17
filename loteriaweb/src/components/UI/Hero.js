import Form from "../form/Form";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-content"]}>
        <h1 className="open-sans bold-sans">Juega la loteria mexicana</h1>
        <Form/>
      </div>
    </div>
  );
};

export default Hero;
