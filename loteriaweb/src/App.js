import Home from "./pages/home";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
import Lobbi from "./pages/Lobbi";
import GameRoom from "./pages/GameRoom";
import MatchEnded from "./pages/MatchEnded";
import PlayerRoom from "./pages/PlayerRoom";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/lobbi">
        <Lobbi />
      </Route>

      <Route path="/gameroom">
        <GameRoom />
      </Route>
      
      <Route path="/endmatch">
        <MatchEnded />
      </Route>
    </div>
  );
}

export default App;
