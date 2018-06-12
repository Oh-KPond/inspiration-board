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

  addCard = (card) => {
    axios.post('https://inspiration-board.herokuapp.com/boards/katepond/cards')
    // const cards = this.state.cards;
    //
    // cards.push(card);
    // this.setState({
    //   cards,
    // })
  }
  
  
  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/boards/katepond/cards/${id}`)
    .then( (response) => {
    // this.componentWillUnmount(); <---  Is this something I should be using instead
    console.log(response);
    // TODO: Add delete successful to a flash message?
    this.componentDidMount();
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });

  renderCards = () => {
    const cardList = this.state.cards.map((data,index) => {
      return (
        <Card
          key={index}
          text={data.card.text}
          emoji={data.card.emoji}
          id={data.card.id}
          deleteCardCallback={this.deleteCard}
        />
      );
    });
    return cardList
  }

  render() {
    return (
      <div className="board">
        {this.renderCards()}
        <NewCardForm addCardCallback={this.addCard} />
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
