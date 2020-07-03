import React from "react";
import Game from "./Game";
import Navbar from "./Navbar";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default Main;
