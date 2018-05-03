import React, {Component} from 'react';

class Card extends Component {

  render() {
    if (this.props.isEditMode) {
      return (
        <div>
          <input
            type="text"
            name="title"
            value={this.props.title}
          />
          <input
            type="text"
            name="value"
            value={this.props.value}
            />
          <button>
            Edit
          </button>
        </div>
      )
    }

    return (
      <div>
        <h3>{this.props.title}</h3>
        <span>{this.props.value}</span>
        <button>
          Edit
        </button>
      </div>
    )
  }
}

export default Card;
