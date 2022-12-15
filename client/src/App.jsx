import { useState } from "react";
import "./App.css";
import RepicesContainer from "../components/RecipesContainer";
import IngredientsContainer from "../components/IngredientsContainer";
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
        <IngredientsContainer showBox={setShowBox} visibility={setVisibility} />
        <RepicesContainer showBox={setShowBox} visibility={setVisibility} />
      </div>
    </div>
  );
}

export default App;
