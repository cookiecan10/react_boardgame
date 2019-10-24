import React, { Component } from 'react'
import CardRow from './CardRow'
import Dialog from './Dialog'
import axios from 'axios';
import QuestionCard from '../../classes/QuestionCard'
import InteractionCard from '../../classes/InteractionCard'
import LETCard from '../../classes/LETCard'
// import { restElement } from '@babel/types';
import CardSelector from './CardSelector'

const MAX_LENGTH = 9;

let questionCardPlaceholders = Array(MAX_LENGTH).fill();
// [
//     // id, title, enhancements, code, analytics, isEmpty
//     new QuestionCard(0, 'Initiative', ['Timing in collaboration environments', 'Timing in asking questions', 'Timing in handling in assignments'], 'WHAT003', 'How often and how fast do student take initiative', false),
//     new QuestionCard(645465, 'Yeeting in class', ['todo: fix vertical card size'], 'WUT0W0', 'I am become death, destroyer of worlds', false),
//     new QuestionCard(2, 'Having Fun', ['Questionnaire', 'Facial Expression (Camera)'], 'WHAT004', 'Do student enjoy the learning activities', false),
//     new QuestionCard(3, 'Activity', ['Presence', 'Number of clicks', 'Number of live interactions'], 'WHAT009', 'How active are students', false),
// ]

let interactionCardPlaceholders = Array(MAX_LENGTH).fill();
// [
//     //key, from, to, desciption, isEmpty
//     new InteractionCard(0, 'student', 'envirement', 'Interaction desciption', false),
//     new InteractionCard(),
//     new InteractionCard(),
//     new InteractionCard(),
// ]

let LETCardPlaceholders = Array(MAX_LENGTH).fill();

    //Array(4).fill(new LETCard()); //Does not work, doesn't create new cards, they all references the same object
// [
//     // id, title, content, code, description, isEmpty
//     new LETCard(0, 'BLOG/VLOG', ['Content creation', '(Peer) Feedback', 'Collaboration'], 'LET003', ['Timing of creation/reaction', 'Amount creation/reaction', 'Content distribution'], false),
//     new LETCard(),
//     new LETCard(),
//     new LETCard(),
// ]

function findIndex(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].key === key) {
            return i;
        }
    }
    return null;
}

axios.get("https://cardgame.shannendolls.com/api/v1.0/cards").then(res => console.log("DING ", res))

class Board extends Component {

    constructor(props) {
        //You have to do this in react
        super(props)

        //axios.post('https://jsonplaceholder.typicode.com/todos'

        //Assigning keys's
        //You can probably assign all of the card types if you use a forloop and put the different cardtypes in an array
        this.state.questionCards = questionCardPlaceholders.map( (card, index) => {
            if (card !== undefined){
                card.key = index; //Remove if you want to take the id's from api
                return (card);
            } else {
                return new QuestionCard(index);
            }
        });

        this.state.interactionCards = interactionCardPlaceholders.map( (card, index) => {
            if (card !== undefined){
                card.key = index;
                return (card);
            } else {
                return new InteractionCard(index);
            }
        });

        this.state.LETCards = LETCardPlaceholders.map( (card, index) => {
            if (card !== undefined){
                card.key = index;
                return (card);
            } else {
                return new LETCard(index);
            }
        });

    }

    deleteCard = (key, type) => {

        let cards = this.state[type];

        let index = findIndex(cards, key);

        cards[index].reset();

        this.setState({[type]: cards}); // Set state to equal new card array
    }

    moveLeft = (key, type) => {

        // Copy list of cards
        let cards = this.state[type];

        // Find index of card
        let index = findIndex(cards, key);

        let card = cards.filter( card => card.key === key)[0];  // Copy card
        cards = cards.filter( card => card.key !== key);        // Delete card from list

        //Prevent looping card back around
        let newIndex = 0;
        if (index === 0) {
            newIndex = 0;
        } else {
            newIndex = index - 1;
        }

        cards.splice(newIndex, 0, card); // Add card to list

        // Set state equal to new card array
        this.setState({[type]: cards});
    }

    moveRight = (key, type) => {

        // Copy list of cards
        let cards = this.state[type];

        // Find index of card
        let index = findIndex(cards, key);

        let card = cards.filter( card => card.key === key)[0];  // Copy card by value, not by reference
        cards = cards.filter( card => card.key !== key);        // Delete card from list

        // Add card to list
        cards.splice(index+1, 0, card);

        // Set state to equal new card array
        this.setState({[type]: cards});
    }

    openCardSelect = (key, type) => {

        var index = findIndex(this.state[type], key)
        console.log(index)

        this.setState({selectedCardIndex: index});
        this.setState({selectedRowType: type});

        switch(type){
            case 'questionCards':
                this.setState({menuCards: this.state.allQuestionCards})
                break;
            case 'interactionCards':
                    this.setState({menuCards: this.state.allInteractionCards})
                    break;
            case 'LETCards':
                    this.setState({menuCards: this.state.allLETCards})
                    break;
        }

        this.setState({cardSelectOpen: true});
    }

    addCard = (key, type) => {

        let cards = [...this.state[this.state.selectedRowType]]; // Make shallow copy of the selected row

        let menuCard = this.state.menuCards.filter( card => card.key === key)[0]; // Copy the selected menuCard

        // Copy the card (Carefull this is dependend on the fact that the cards are the same type of card)
        // This has been done with a .copy in order to copy by value instead of by reference, any other way to copy by value would also work
        cards[this.state.selectedCardIndex].copy(menuCard);

        this.setState({[this.state.selectedRowType]: cards}); // Save

        this.setState({cardSelectOpen: false})
    }

    state = {
        diaglogOpen: false,
        cardSelectOpen: false,
        selectKey: -1,
        selectedRowType: '',
        menuCards: [],
        allCards: [],
        allQuestionCards: [
            new QuestionCard(0, 'Initiative', ['Timing in collaboration environments', 'Timing in asking questions', 'Timing in handling in assignments'], 'WHAT003', 'How often and how fast do student take initiative', false),
            new QuestionCard(645465, 'Yeeting in class', ['todo: fix vertical card size'], 'WUT0W0', 'I am become death, destroyer of worlds', false),
            new QuestionCard(2, 'Having Fun', ['Questionnaire', 'Facial Expression (Camera)'], 'WHAT004', 'Do student enjoy the learning activities', false),
            new QuestionCard(3, 'Activity', ['Presence', 'Number of clicks', 'Number of live interactions'], 'WHAT009', 'How active are students', false),
        ],
        allLETCards: [
            new LETCard(0, 'BLOG/VLOG', ['Content creation', '(Peer) Feedback', 'Collaboration'], 'LET003', ['Timing of creation/reaction', 'Amount creation/reaction', 'Content distribution'], false),
            new LETCard(0, 'MOBILE PHONE (APP)', ['Content Delivery', 'Sensors', 'Photo/Video', 'Location Tracking'], 'LET001', ['Sensors', 'Photo/Video', 'Location Tracking', 'Questionnaire Distribution'], false),
        ],
        allInteractionCards: [
            new InteractionCard(0, 'Student', 'Environment', 'Interaction desciption', false),
            new InteractionCard(0, 'Environment', 'Student', 'Interaction desciption', false),
            new InteractionCard(0, 'Student', 'Material', 'Interaction desciption', false),
            new InteractionCard(0, 'Material', 'Student', 'Interaction desciption', false),
            new InteractionCard(0, 'Student', 'Student', 'Interaction desciption', false),
            new InteractionCard(0, 'Student', 'Teacher', 'Interaction desciption', false),
            new InteractionCard(0, 'Teacher', 'Student', 'Interaction desciption', false),
        ],
        // LETcards: [],
        // interactionCards: [],
        // questionCards: []
    }

    componentDidMount() {
        axios.get('https://cardgame.shannendolls.com/api/v1.0/cards')
        .then(res => this.setState({allCards: res.data.cards}))
        .catch((error) => {
            console.log("Error: ", error);
        })
    }

    render() {
        return (
            <div className='Board'>

                <div className='BoardMenu' >
                    <button onClick={(e) => this.setState({ diaglogOpen: !this.state.diaglogOpen})}>Regels</button>
                    <p>These are menu items</p>
                </div>

                <div className='CardRows'>
                    <CardRow cardRowType='LETCards' 
                        cards={this.state.LETCards} 
                        moveLeft={this.moveLeft} 
                        moveRight={this.moveRight} 
                        delCard={this.deleteCard} 
                        addCard={this.openCardSelect}>
                    </CardRow>

                    <CardRow cardRowType='interactionCards' 
                        cards={this.state.interactionCards} 
                        moveLeft={this.moveLeft} 
                        moveRight={this.moveRight} 
                        delCard={this.deleteCard} 
                        addCard={this.openCardSelect}>
                    </CardRow>

                    <CardRow cardRowType='questionCards' 
                        cards={this.state.questionCards} 
                        moveLeft={this.moveLeft} 
                        moveRight={this.moveRight} 
                        delCard={this.deleteCard} 
                        addCard={this.openCardSelect}>
                    </CardRow>
                </div>

                {/* This needs to be last */}
                    <CardSelector 
                        isOpen={this.state.cardSelectOpen}
                        cards={this.state.menuCards} 
                        onClose={(e) => this.setState({ cardSelectOpen: false})}
                        addCard={this.addCard}>
                    </CardSelector>
                <Dialog isOpen={this.state.diaglogOpen} onClose={(e) => this.setState({ diaglogOpen: false})}> <img src={require('../../bordspel_cirkel.PNG')} width='90%'/> </Dialog>
            </div>
        )
    }
}

export default Board;