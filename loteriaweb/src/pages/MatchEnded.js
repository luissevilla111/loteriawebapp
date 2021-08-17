import { useState, useEffect } from "react";
import FullPageContainer from "../components/UI/FullPageContainer";
import classes from "./MatchEnded.module.css";
import LoteryFigure from "../components/UI/loteriaCards/LoteryFigure";
import { useSelector } from "react-redux";
import Button from "../components/UI/Button";
import { useHistory } from "react-router";
import { hidden } from "chalk";

const MatchEnded = (props) => {
  const history = useHistory();
  const arrayCards = useSelector((state) => state.shuffle);
  const [isReady, setIsReady] = useState(false);
  const [cardsToShow, setCardsToShow] = useState();
  const [isShow, setIsShow] = useState();
  if (arrayCards.length < 1) {
    history.replace("/lobbi");
  }

  useEffect(() => {
    const length = arrayCards.length;
    setCardsToShow(
      arrayCards.map((figure, index) => {
        if (index === length - 1) {
          setIsReady(true);
          /* console.log(index); */
        }
        return (
          <div className={classes.figure} key={figure}>
            <LoteryFigure id={figure + 1} clickCard={() => {}} />
          </div>
        );
      })
    );

    
  }, [arrayCards]);

  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        
        setIsShow(true);
      }, 1500);
    }
    
  }, [isReady]);

  return (
    <FullPageContainer>
      <div className={classes.background}>
        <div style={{ display: isShow ? "block" : "none" }}>
          <div className={classes["all-cards"]}>
            {isReady ? cardsToShow : ""}
          </div>
          <div style={{ width: "50%", margin: "0 auto" }}>
            <Button onClick={() => history.replace("/lobbi")}>
              Go to lobbi
            </Button>
          </div>
        </div>
      </div>
    </FullPageContainer>
  );
};

export default MatchEnded;
