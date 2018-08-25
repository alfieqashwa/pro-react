import React, { Component } from "react";
import CheckList from "./CheckList";

class Card extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      // constructor function to define a new key
      showDetails: false
    };
  }

  render() {
    let cardDetails;

    // if showDetails is true, then pass cardDetails
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }

    return (
      <div className="card">
        <div
          className="card__title"
          onClick={
            // event handler to change internal state.
            // Use the JavaScript ! (not) operator to toggle the Boolean property showDetails
            // if it's currently true, it will became false and vise-versa
            () => this.setState({ showDetails: !this.state.showDetails })
          }
        >
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
