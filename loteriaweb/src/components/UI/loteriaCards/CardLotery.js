import { useState } from "react";
import Card from "../../../models/card";
import classes from "./CardLotery.module.css";
import LoteryFigure from "./LoteryFigure";
/* import figure from "../../../assets/images/figures/spr_posicion_baraja_0.png"; */
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cards-slice";
import Button from "../Button";

const CardLotery = (props) => {
  const figures = useSelector((state) => state.card);

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const cardClickHandler = (figureId) => {
    if (props.isExample) {
      return;
    }

    if (editMode) {
      /**change Array cards */

      dispatch(cartActions.changeFigure({ id: figureId }));
    } else {
      dispatch(cartActions.putRock({ id: figureId }));
    }
  };
  return (
    <div className={classes.card}>
      <div className={classes["cont-title"]}>
        <p>Loteria</p>
        {props.isExample && <p>Card #6</p>}
        {!props.isExample && (
          <div>
            <Button onClick={() => setEditMode((prevState) => !prevState)}>
              {editMode ? "OK" : "Edit"}
            </Button>
          </div>
        )}
      </div>

      <div className={classes["cont-figures"]}>
        {figures.map((figure) => (
          <LoteryFigure
            key={figure.id}
            id={figure.id}
            clickCard={cardClickHandler}
            hasRock={figure.hasRock}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLotery;
