import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import classes from "./LoteryFigure.module.css";

const LoteryFigures = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = props;
  const [image, setImage] = useState("");

  useEffect(() => {
    import(
      `../../../assets/images/figures/spr_posicion_baraja_${+id - 1}.png`
    ).then((imagen) => {
      setIsLoading(false);
      setImage(imagen.default);
    });
    /* console.log("loop"); */
  }, [id]);

  const clickHandler = (idd) => {
    props.clickCard(idd);
  };

  return (
    <div
      className={classes["cont-figure"]}
      onClick={clickHandler.bind(null, id)}
    >
      {props.hasRock && <div className={classes.rock}></div>}
      {!isLoading && <img src={image} alt="aqui va la carta"></img>}
      {isLoading && <Spinner />}
    </div>
  );
};

export default LoteryFigures;
