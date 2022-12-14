import { useState } from "react";
import "./App.css";
import RepicesContainer from "../components/RecipesContainer";
import Ingredients from "../components/Ingredients";
import RenderShowbox from "../components/RenderShowbox";

function App() {
  const [showBox, setShowBox] = useState({});
  const [visibility, setVisibility] = useState("hidden");

  return (
    <div className="app">
      <h1>Suuri reseptikirja</h1>
      <RenderShowbox
        showBox={showBox}
        visibility={visibility}
        onVisibilityChange={(visibility) => setVisibility(visibility)}
      />
      <div className="flexRow">
        <Ingredients showBox={setShowBox} visibility={setVisibility} />
        <RepicesContainer showBox={setShowBox} visibility={setVisibility} />
      </div>
    </div>
  );
}

export default App;
