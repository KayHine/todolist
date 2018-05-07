import React, {Component} from 'react';
import Card from './Card'

class Column extends Component {
  constructor() {
    super();
    // each card:
    // id, title, value
    this.state = {
      cards: [],
      count: 0
    }
  };

  handleClick = () => {
    let newCard = {
      id: this.state.count,
      title: '',
      value: '',
      isEditMode: true
    }
    this.setState({
      cards: [...this.state.cards, newCard],
      count: this.state.count + 1
    });
  }

  cardHandleChange = (event) => {
    console.log(event.target.key + ': ' + event.target.value);
  }

  cardButtonHandleClick = () => {

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Add Card
        </button>
        {
          this.state.cards.map((card) =>
            <Card
            key={card.id}
            title={card.title}
            value={card.value}
            isEditMode={card.isEditMode}
            onChange={this.cardHandleChange}
            />)
        }
      </div>
    )
  }
}

export default Column;
