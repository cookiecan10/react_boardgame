import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import axios from 'axios';
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component'; // je kan een dropdown aanmaken die een of meerdere seleties toelaat, zie de betreffende componenten voor meer info.

import './Overview.css';

class CardList extends React.Component {
    state = {
        todos: [
            {
                id: 0,
                title: 'testItem'
            },
            {
                id: 1,
                title: 'TestItem 2'
            }
        ],
        cardCategories: [
            {
                id: 0,
                title: 'L.E.T. cards',
                selected: false,
                key: 'CardCategories'
            },
            {
                id: 1,
                title: 'Interaction cards',
                selected: false,
                key: 'CardCategories'
            },
            {
                id: 2,
                title: 'Activity cards',
                selected: false,
                key: 'CardCategories'
            },
            {
                id: 3,
                title: 'Pedagogy cards',
                selected: false,
                key: 'CardCategories'
            }
        ]
    }
    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        });
    }
    componentDidMount() {
        axios.get('')
            .then(res => this.setState({ todos: res.data }))
    }

    // Toggle complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    // Delete Todo
    delTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    }

    //Add Todo
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    }
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="container">

                                <div className="wrapper">
                                    <Dropdown
                                        title="Select Category"//Dit is de titel van dropdown,ui taal moet engels zijn.
                                        list={this.state.cardCategories} //de dropdown wordt gevult met de items die in de state gedfineerd worden.
                                        resetThenSet={this.resetThenSet}
                                    />
                                </div>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} delTodo={this.delTodo} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
                </React.Fragment>
        );
    }

}

export default CardList