import React from 'react';
import Todos from './components/Todos'
import AddCard from './components/AddCard'
import CardInfo from './components/CardInfo'
import LetCard from './components/LetCard'
import axios from 'axios';
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component'; // je kan een dropdown aanmaken die een of meerdere seleties toelaat, zie de betreffende componenten voor meer info.

import './Overview.css';
import LETCard from '../cards/bigCards/LET_Card';



class CardList extends React.Component {





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


    // Delete Todo
    delTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.cards.filter(todo => todo.id !== id)] }))
    }

    //Add Todo
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.cards, res.data] }));
    }
    state = {
        enhancedCards: [],
        interactionCards: [],
        activityCards: [],
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
        ],
        cards:
            [
            ]
    }
    render() {
        let rCard;//moet nog kaart die getoont moet worden hierin doen
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
                        <AddCard addTodo={this.addTodo} />
                        <CardInfo/>
                                <Todos todos={this.state.cards} delTodo={this.delTodo} />
                    </div>

                </div>
                </React.Fragment>
        );
    }

}

export default CardList