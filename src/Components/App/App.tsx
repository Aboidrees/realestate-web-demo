import React from "react";
import { MapLoader } from "../Map/MapLoader";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h3>RealTime Aviation monitoring Demo</h3>
      </header>
      <MapLoader />
    </div>
  );
};

export default App;
