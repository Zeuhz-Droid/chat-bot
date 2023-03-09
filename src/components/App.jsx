import React from "react";
import "./App.css";

import ClientMessage from "./client/ClientMessage";
import ServerMessage from "./server/ServerMessage";

const App = () => {
  return (
    <div className="App">
      <ClientMessage />
      <ServerMessage />
    </div>
  );
};

export default App;
