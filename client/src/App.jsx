import { useState } from "react";
import "./App.css";
import Repices from "../components/Recipes";
import Ingredients from "../components/Ingredients";
import RenderShowbox from "../components/RenderShowbox";

function App() {
  const [showBox, setShowBox] = useState("hidden");

  return (
    <div className="app">
      <h1>Suuri reseptikirja</h1>
      <RenderShowbox
        showBox={showBox}
        setShowBox={setShowBox}
        visibility={"hidden"}
      />
      <div className="flexRow">
        <Ingredients showBox={setShowBox} />
        <Repices showBox={setShowBox} />
      </div>
    </div>
  );
}

export default App;
