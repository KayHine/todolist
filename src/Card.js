import React, {Component} from 'react';

class Card extends Component {

  render() {
    if (this.props.isEditMode) {
      return (
        <div>
          <input
            type="text"
            name="title"
            key={this.props.id}
            value={this.props.title}
            onChange={this.props.onChange}
          />
          <input
            type="text"
            name="value"
            key={this.props.id}
            value={this.props.value}
            onChange={this.props.onChange}
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
