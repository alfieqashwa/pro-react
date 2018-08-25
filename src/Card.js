import React, { Component } from "react";
import PropTypes from "prop-types";

import CheckList from "./CheckList";
import marked from "marked";

class Card extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      // constructor function to define a new key
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    let cardDetails;

    // if showDetails is true, then pass cardDetails
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span
            dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
          />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }

    let sideColor = {
      position: "absolute",
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="card">
        <div style={sideColor} />
        <div
          className={
            /* JSX ternary condition [this is cool, man! ] */
            this.state.showDetails
              ? "card__title card__title--is-open"
              : "card__title"
          }
          onClick={this.toggleDetails.bind(this)}
        >
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Card;
