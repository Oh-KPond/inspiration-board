import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <article>
          <h3>{this.props.text}</h3>
          <p>{this.props.emoji}</p>
        </article>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
