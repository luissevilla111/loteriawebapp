import Button from "../UI/Button";
import classes from "./Form.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const Onlynumbers = /^[-+]?[0-9]+$/;
  const [idRoom, setIdRoom] = useState("");
  const [isValid, setIsValid] = useState(false);

  const inputrRoomIdHandle = (event) => {
    const idR = event.target.value;
    if ((idR.match(Onlynumbers) || idR === "") && idR.length < 7) {
      setIdRoom(idR);
      if (idR.length > 2) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }

      if (idR === "") {
        setIsValid(false);
      }
    }
  };

  const goToLobbi = () => {
    history.replace("/lobbi");
  };

  return (
    <form className={classes.form}>
      <label>Create Id Room</label>
      <div className={classes.input}>
        <input
          type="text"
          placeholder="Room Id(only numbers)"
          value={idRoom}
          onChange={inputrRoomIdHandle}
        ></input>
      </div>

      <Button type="submit" disabled={!isValid} onClick={goToLobbi}>
        Start Game
      </Button>
    </form>
  );
};

export default Form;
