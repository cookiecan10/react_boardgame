import React, { Component } from 'react'
import CardRow from './CardRow'
import Dialog from './Dialog'
import axios from 'axios';
import QuestionCard from '../../classes/QuestionCard'
import InteractionCard from '../../classes/InteractionCard'
import LETCard from '../../classes/LETCard'
import CardSelector from './CardSelector'

const MAX_CARD_LENGTH = 8;

let LETCardPlaceholders = Array(MAX_CARD_LENGTH).fill();
let interactionCardPlaceholders = Array(MAX_CARD_LENGTH).fill();
let questionCardPlaceholders = Array(MAX_CARD_LENGTH).fill();

// Find the index of an object by key
function findIndex(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].key === key) {
            return i;
        }
    }
    return null;
}

// Set default headers for axios
axios.defaults.headers.common['Content-Type'] = 'application/json' 

class Board extends Component {

    constructor(props) {
        //You have to do this in react
        super(props)

        // Get and procces cards from the api
        axios.get("https://cardgame.shannendolls.com/api/v1.0/cards").then(res => this.proccesGetCards(res.data));
        axios.post("https://cardgame.shannendolls.com/api/v1.0/new_session", {}).then(res => this.getSessionID(res.data));

        // Assigning keys's and put (empty) cards in the state
        this.state.LETCards = LETCardPlaceholders.map( (card, index) => {
            if (card === undefined){
                return new LETCard(index);
            } else {return card}
        });

        this.state.interactionCards = interactionCardPlaceholders.map( (card, index) => {
            if (card === undefined){
                return new InteractionCard(index);
            } else {return card}
        });

        this.state.questionCards = questionCardPlaceholders.map( (card, index) => {
            if (card === undefined){
                return new QuestionCard(index);
            } else {return card}
        });
    }

    getSessionID = (idData) => {
        console.log(idData);
        this.setState({sessionID: idData.oid})
    }

    // Procces the cards from the api, put them in the state sorted by cardtype
    proccesGetCards = (cardsData) => {
        let cards = cardsData.cards; // Get cards from api object
        console.log('Cards collected from server: ', cards); // Log card data
        cards.map((card) => {
            if (card.cardType === undefined){
                console.log("Incorrect card format provided, cannot procces this card!", card)
            } else {

                switch(card.cardType){
                    case 'InteractionCards':
                                                    // key, to, from, description, id, isEmpty
                        let iCard = new InteractionCard(null, card.to, card.from, card.description, card._id, false);
                        this.setState({allInteractionCards: [...this.state.allInteractionCards, iCard] });
                        break;
                    case 'QuestionCards':
                                                    // key, title, content, code, description, id, isEmpty
                        let qCard = new QuestionCard(null, card.title, card.content, card.code, card.description, null, false );
                        this.setState({allQuestionCards: [...this.state.allQuestionCards, qCard]});
                        break;
                    case 'LETCards':
                                            // key=null, title='', enhancements=[], code='', analytics=[], id=null, isEmpty=true
                        let lCard = new LETCard(null, card.title, card.enhancements, card.code, card.analytics, null, false)
                        this.setState({allLETCards: [...this.state.allLETCards, lCard]})
                        break;
                    default:
                        console.log('This card type does not exists! ', card);
                        break;
                }
            }
        })
    }

    // Send gamestate to the api
    postGameState = () => {
        var gamestate = {
            LETCards: this.state.letcards,
            InteractionCards: this.state.interactionCards,
            QuestionCards: this.state.questionCards,
            cardSelectOpen: this.state.cardSelectOpen,
            selectedRowType: this.state.selectedRowType,
            rulesOpen: this.state.rulesOpen,
            //Roundnumber: this.state.roundNumber,
            session_id: this.state.sessionID,
        }
        axios.post("https://cardgame.shannendolls.com/api/v1.0/new_gamestate", gamestate).then(res => console.log(res));
    }

    // Delete a card on the board
    deleteCard = (key, type) => {

        let cards = this.state[type];

        let index = findIndex(cards, key);

        cards[index].reset(); // Reset all values to default except the key

        this.setState({[type]: cards}); // Set state to equal new card array

        this.postGameState();
    }

    // Move a board card to the left
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

        this.postGameState();
    }

    // Move a board card to the right
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

        this.postGameState();
    }

    // Open the card selection menu
    openCardSelect = (key, type) => {

        var index = findIndex(this.state[type], key) // Find index of the board card

        this.setState({selectedCardIndex: index}); // Save index
        this.setState({selectedRowType: type}); // Save card row type

        // Choose which set of cards get displayed in the card menu
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
            default:
                break;
        }

        this.setState({cardSelectOpen: true}); // Open the card selection menu

        this.postGameState();
    }

    // Add a card to the board
    addCard = (key, type) => {

        let cards = [...this.state[this.state.selectedRowType]]; // Make shallow copy of the selected row

        let menuCard = this.state.menuCards.filter( card => card.key === key)[0]; // Copy the selected menuCard
        

        // ------------------------------------------------------------------------------------------------------------------
        // WARNING: This code has been used to post cards to the api. It is no longer relevant in this function, but has not been deleted to provide an example of how to post
        //
        // let x = menuCard.getDBinfo();
        // console.log('SEND: ', x)
        // axios.post('https://cardgame.shannendolls.com/api/v1.0/new_card', x).then(res => console.log('RESPONSE: ', res))
        // ------------------------------------------------------------------------------------------------------------------


        // Copy the card (Carefull this is dependend on the fact that the cards are the same type)
        // This has been done with a .copy in order to copy by value instead of by reference, any other way to copy by value would also work
        cards[this.state.selectedCardIndex].copy(menuCard);

        this.setState({[this.state.selectedRowType]: cards}); // Save changes to the state

        this.setState({cardSelectOpen: false}) // Close the card selection menu

        this.postGameState();
    }

    // Save the description of an interaction card to the state
    changeIDescription = (key, data) => {
        let cards = [...this.state.interactionCards];   // Copy interaction cards

        let index = findIndex(cards, key);              // Find the card index

        cards[index].description = data.target.value;   // Change the description in the state to the provided description

        this.setState({interactionCards: cards});       // Save changes to the state
    }

    state = {
        rulesOpen: false,
        cardSelectOpen: false,
        selectKey: -1,
        selectedRowType: '',
        menuCards: [],
        allQuestionCards: [//key=null, title='', content=[], code='', description='', id=null, isEmpty=true
            // new QuestionCard(null, 'Engagement', ['Presence (Online/Offline)', 'Online Actions (xApi)', 'Offline Actions (Camera)'], 'WHAT001', 'The engagement of the student in the interaction is the amount of time, attention and effort a student puts into the interaction', null, false),
            // new QuestionCard(null, 'Use of Resources', ['Count of usage content', 'Timestamp of content use'], 'WHAT005', 'How much, how long, when are resources used', null, false),
    ],
        allLETCards: [],    
        allInteractionCards: [],
    }

    render() {
        return (
            <div className='Board'>

                {/* The menu */}
                <div className='BoardMenu' >
                    <button onClick={(e) => this.setState({ rulesOpen: !this.state.rulesOpen})}>Regels</button>
                    <p>These are menu items</p>
                </div>

                {/* The rows of cards */}
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
                        changeIDescription={this.changeIDescription}
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

                {/* This needs to be last because HTML draws objects in the order that they are defined. Overlays go last*/}
                    <CardSelector 
                        isOpen={this.state.cardSelectOpen}
                        cards={this.state.menuCards} 
                        onClose={(e) => this.setState({ cardSelectOpen: false})}
                        addCard={this.addCard}>
                    </CardSelector>
                <Dialog isOpen={this.state.rulesOpen} onClose={(e) => this.setState({ rulesOpen: false})}> <img src={require('../../bordspel_cirkel.PNG')} width='90%'/> </Dialog>
            </div>
        )
    }
}

export default Board;