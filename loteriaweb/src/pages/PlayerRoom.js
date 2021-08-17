import FullPageContainer from "../components/UI/FullPageContainer";
import CardLotery from "../components/UI/loteriaCards/CardLotery";
import classes from "./PlayerRoom.module.css";
const PlayerRoom = () => {
  return (
    <FullPageContainer>
      <div className={classes["player-room"]}>
        <div>
          <CardLotery isExample={false} />
        </div>
      </div>
    </FullPageContainer>
  );
};

export default PlayerRoom;
