import React, {Component} from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      value: '',
      isEditMode: true
    };
  }

  // generalize event handler that updates either title or value
  // based on the input name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // button click eventhandler
  handleClick = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  }

  render() {
    if (this.state.isEditMode) {
      return (
        <div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange} />
          <input
            type="text"
            name="value"
            value={this.state.value}
            onChange={this.handleChange} />
          <button onClick={this.handleClick}>
            Edit
          </button>
        </div>
      )
    }

    return (
      <div>
        <h3>{this.state.title}</h3>
        <span>{this.state.value}</span>
        <button onClick={this.handleClick}>
          Edit
        </button>
      </div>
    )
  }
}

export default Card;
