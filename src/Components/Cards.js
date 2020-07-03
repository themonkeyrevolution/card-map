import React from "react";
import { cards } from "./Cards/index";

class Cards extends React.Component {
  handleClick = (event) => {
    let card = event.target;
    this.switch(card);
  };

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("card-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("card-blank");
    }
  };

  render() {
    return (
      <div className="cards">
        {cards.map((element) => {
          return (
            <div
              className="card card-blank"
              name={element.name}
              check="false"
              onClick={this.handleClick}
            >
              {element.name}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cards;
