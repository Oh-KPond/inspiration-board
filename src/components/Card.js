import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    let displayText;
    let displayEmoji;

    if (this.props.text) {
      displayText = <h3 className="card__content-text">{this.props.text}</h3>;
    }

    if (this.props.emoji) {
      displayEmoji = <p className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</p>;
    }


    return (
      <div className="card">
        <article className="card__content">
          {displayText}
          {displayEmoji}
        </article>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
