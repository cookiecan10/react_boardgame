import React from 'react';
import Todos from './components/Todos'
import AddCard from './components/AddCard'
import CardInfo from './components/CardInfo'
import CardRow from '../boardgame/CardRow'
import axios from 'axios';
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component'; // je kan een dropdown aanmaken die een of meerdere seleties toelaat, zie de betreffende componenten voor meer info.

import './Overview.css';
class Card {
    constructor(key = 0, content = [], code = '', description = '', isEmpty = true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty = isEmpty;
    }

    // Reset all of the data off the card, can also assign new values
    reset(key = this.key, content = [], code = '', description = '', isEmpty = true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty = isEmpty;
    }
}
class ActivityCard extends Card {
    cardType = 'activityCards';
}

class InteractionCard extends Card {
    cardType = 'interactionCards';
}

class EnhancedCard extends Card {
    cardType = 'enhancedCards';
}
let activityCardPlaceholders = [

    // id, content, code, description, isEmpty
    new ActivityCard(2, ['stuff']),
    //new InteractionCard(54, ['Presence', 'Number of clicks', 'Number of live interactions'], 'WHAT007', 'Some text', false),
    new ActivityCard(3, ['Presence', 'Number of clicks', 'Number of live interactions'], 'WHAT007', 'Some text', false)
]

let interactionCardPlaceholders =
    [
        new InteractionCard(0, ['Notices your card'], 'OWO', 'Interactions', false),
        new InteractionCard(),
    ]

let enhancedCardPlaceholders = //Array(MAX_LENGTH).fill();

    //Array(4).fill(new EnhancedCard()); //Does not work, doesn't create new cards, they all references the same object
    [
        new EnhancedCard(0, ['some content stuff'], 'OWO', 'enhancing', false),
        new EnhancedCard(),
    ]
function findIndex(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].key === key) {
            return i;
        }
    }
    return -1;
}

class CardList extends React.Component {
    constructor(props) {
        //You have to do this in react
        super(props)
        //Assigning keys's
        //You can probably assign all of the card types if you use a forloop and put the different cardtypes in an array
        this.state.activityCards = activityCardPlaceholders.map((card, index) => {
            if (card !== undefined) {
                card.key = index; //Remove if you want to take the id's from api
                return (card);
            } else {
                return new ActivityCard(index);
            }
        });

        this.state.interactionCards = interactionCardPlaceholders.map((card, index) => {
            if (card !== undefined) {
                card.key = index;
                return (card);
            } else {
                return new InteractionCard(index);
            }
        });

        this.state.enhancedCards = enhancedCardPlaceholders.map((card, index) => {
            if (card !== undefined) {
                card.key = index;
                return (card);
            } else {
                return new EnhancedCard(index);
            }
        });

    }
    moveLeft = (key, type) => {

        // Copy list of cards
        let cards = this.state[type];
        console.log(type);

        // Find index of card
        let index = findIndex(cards, key);
        console.log(index);

        let card = cards.filter(card => card.key === key)[0];  // Copy card
        cards = cards.filter(card => card.key !== key);        // Delete card from list

        //Prevent looping card back around
        let newIndex = 0;
        if (index === 0) {
            newIndex = 0;
        } else {
            newIndex = index - 1;
        }

        cards.splice(newIndex, 0, card); // Add card to list

        // Set state equal to new card array
        this.setState({ [type]: cards });
    }

    moveRight = (key, type) => {

        // Copy list of cards
        let cards = this.state[type];
        console.log(type);

        // Find index of card
        let index = findIndex(cards, key);
        console.log(index);

        let card = cards.filter(card => card.key === key)[0];  // Copy card
        cards = cards.filter(card => card.key !== key);        // Delete card from list

        // Add card to list
        cards.splice(index + 1, 0, card);

        // Set state to equal new card array
        this.setState({ [type]: cards });
    }
    deleteCard = (key, type) => {

        let cards = this.state[type];
        console.log(cards)
        console.log(type);

        let index = findIndex(cards, key);
        console.log(index);

        cards[index].reset();

        console.log(cards);

        this.setState({ [type]: cards }); // Set state to equal new card array
    }
    addCard = (key, type) => {
        let cards = this.state[type];

        console.log("Key: ", key);
        console.log(type);

        let index = findIndex(cards, key);

        console.log(index);

        console.log('before:');
        console.log(cards);

        cards[index].reset(key, ['stuff'], 'stuff', 'stuff', false);

        console.log('after: ');
        console.log(cards);

        this.setState({ [type]: cards });
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
            todos: this.state.cards.map(todo => {
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
                    <CardRow cardRowType='enhancedCards'
                        cards={this.state.enhancedCards}
                        moveLeft={this.moveLeft}
                        moveRight={this.moveRight}
                        delCard={this.deleteCard}
                        addCard={this.addCard}>
                    </CardRow>
                    <CardRow cardRowType='interactionCards'
                        cards={this.state.interactionCards}
                        moveLeft={this.moveLeft}
                        moveRight={this.moveRight}
                        delCard={this.deleteCard}
                        addCard={this.addCard}>
                    </CardRow>

                    <CardRow cardRowType='activityCards'
                        cards={this.state.activityCards}
                        moveLeft={this.moveLeft}
                        moveRight={this.moveRight}
                        delCard={this.deleteCard}
                        addCard={this.addCard}>
                    </CardRow>
                </div>
                </React.Fragment>
        );
    }

}

export default CardList