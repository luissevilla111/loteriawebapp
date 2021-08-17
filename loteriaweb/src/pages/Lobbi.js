import FullPageContainer from "../components/UI/FullPageContainer";
import classes from "./Lobbi.module.css";
import imgSpr from "../assets/images/spr_0_0.png";
import CardLotery from "../components/UI/loteriaCards/CardLotery";
import Button from "../components/UI/Button";
import { useHistory } from "react-router";
const Lobbi = () => {
  const history = useHistory();
  return (
    <FullPageContainer>
      <div className={classes.lobbi}>
        <div className={classes.cardsGameForms}>
          <div className={classes["cont-actions-cont"]}>
            <i className="fas fa-chevron-left"></i>
            {/* card type presentation*/}
            <CardLotery isExample={true} />
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className={classes.controls}>
            <i className="fas fa-arrow-left"></i>
            <Button
              onClick={() => {
                history.push("/gameroom");
              }}
            >
              Start
            </Button>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </FullPageContainer>
  );
};

export default Lobbi;
