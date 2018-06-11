import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/katepond/cards')
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderCards = () => {
    const cardList = this.state.cards.map((data) => {
      return (
        <Card
          key={data.card.id}
          text={data.card.text}
          emoji={data.card.emoji}
        />
      );
    });
    return cardList
  }

  render() {
    return (
      <div className="board">
        {this.renderCards()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
