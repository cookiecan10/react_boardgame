import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import Todos from './Todos';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#dd2222',
    color: '#fff',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '#000',
    padding: '5px 8px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
