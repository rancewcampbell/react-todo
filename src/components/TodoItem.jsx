import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete} /> {' '}
          { this.props.todo.title }
          </p>
      </div>
    )
  }
}

// proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem
