import FullPageContainer from "../components/UI/FullPageContainer";
import classes from "./GameRoom.module.css";
import Button from "../components/UI/Button";
import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { shuffleActions } from "../store/shuffle-slice";
import { useSelector } from "react-redux";

const GameRoom = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const arrayNumbers = useSelector((state) => state.shuffle);

  const [startGame, setStartGame] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [image, setImage] = useState();

  const [newCardInter, setNewCardInter] = useState();

  const [number, setNumber] = useState(-1);

  const [oldImages, setOldImages] = useState([]);

  const [pause, setPause] = useState();

  useEffect(() => {
    let nextCardInter;

    if (startGame) {
      if (!pause) {
        setNumber((prevNumber) => (prevNumber += 1));
      }
      nextCardInter = setInterval(() => {
        setNumber((prevNumber) => (prevNumber += 1));
      }, 3000);

      setNewCardInter(nextCardInter);
      /* return; */
    }

    if (pause) {
      clearInterval(nextCardInter);
      setNewCardInter(nextCardInter);
    }

    return () => clearInterval(nextCardInter);
  }, [startGame, pause]);

  useEffect(() => {
    if (!startGame) {
      return;
    }
    /* console.log("USEeFFECT IMAGES " + number); */
    /* console.log(oldImages); */
    if (number > 53) {
      clearInterval(newCardInter);
      setNewCardInter(clearInterval(newCardInter));
      import(
        `../assets/images/figures/spr_posicion_baraja_${arrayNumbers[53]}.png`
      )
        .then((imagen) => {
          setIsLoading(false);
          setImage(imagen.default);
        })
        .catch((err) => {});

      return;
    }

    if (pause) {
      /* setOldImages((prevStaImg) => [...prevStaImg].slice(0, -1)); */
      return;
    }

    import(
      `../assets/images/figures/spr_posicion_baraja_${arrayNumbers[number]}.png`
    )
      .then((imagen) => {
        setIsLoading(false);
        setImage(imagen.default);

        setOldImages((prevImaArray) => [...prevImaArray, imagen.default]);
      })
      .catch((err) => {});
    /* console.log("loop"); */
  }, [startGame, number, arrayNumbers, newCardInter]);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      dispatch(shuffleActions.shuffleMaze());
      setStartGame(true);
    }, 4000);

    return () => {
      clearTimeout(startTimer);
    };
  }, [dispatch]);

  const gamePauseHandler = () => {
    setPause((prevState) => !prevState);
  };

  return (
    <FullPageContainer>
      <Fragment>
        <div className={classes.gameRoom}>
          {startGame && (
            <Fragment>
              <div className={classes.cardPassed}>
                {[...oldImages]
                  .slice(0, -1)
                  .reverse()
                  .map((passedImagen, index) => (
                    <img
                      src={passedImagen}
                      alt="imagen"
                      className={classes.imgPassed}
                      key={index}
                    ></img>
                  ))}
              </div>
              <div className={classes.cardZone}>
                <img src={image} alt="imagen"></img>
              </div>
              <div className={classes.controls}>
                <Button color="#820263" onClick={gamePauseHandler}>
                  {pause ? "Continue" : "Loteria"}
                </Button>
                <Button
                  disabled={!pause}
                  onClick={() =>
                    history.replace({
                      pathname: "/endmatch",
                    })
                  }
                >
                  Fin de Juego{" "}
                </Button>
              </div>
            </Fragment>
          )}
        </div>
      </Fragment>
    </FullPageContainer>
  );
};

export default GameRoom;
