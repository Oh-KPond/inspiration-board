import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    let displayText;
    let displayEmoji;

    if (this.props.text) {
      displayText = <h3>{this.props.text}</h3>;
    }

    if (this.props.emoji) {
      displayEmoji = <p>{emoji.getUnicode(this.props.emoji)}</p>;
    }


    return (
      <div className="card">
          {displayText}
          {displayEmoji}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
