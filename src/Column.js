import React, {Component} from 'react';
import Card from './Card'

class Column extends Component {
  constructor() {
    super();
    this.state = {
      cards: 0
    }
  };

  handleClick = () => {
    this.setState({
      cards: this.state.cards + 1
    });
  }

  var totalCards = [];
  for (var i = 0; i < this.state.cards; i++) {
    totalCards.push(<Card />);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Add Card
        </button>
        {cards}
      </div>
    )
  }
}

export default Column;
