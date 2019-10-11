import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} 
            delTodo={this.props.delTodo} />
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
