import React, { Component } from 'react'
import CardRow from './CardRow'
import Dialog from './Dialog'

class Card {
    constructor(key=0, content=[], code='', description='', isEmpty=true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
    }

    // Reset all of the data off the card, can also assign new values
    reset(key=this.key, content=[], code='', description='', isEmpty=true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
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

// const MAX_LENGTH = 4;

let activityCardPlaceholders = [

    // id, content, code, description, isEmpty
    new ActivityCard(0, ["Info"], 'YOLO', 'Some interesting information', false),
    new ActivityCard(645465, ['todo: fix vertical card size'], 'WHAT008', 'hoooooooooooooooo', false),
    new ActivityCard(2, ['stuff']),
    new ActivityCard(3, ['Presence', 'Number of clicks', 'Number of live interactions'], 'WHAT007', 'Some text', false)
]

let interactionCardPlaceholders =
[
    new InteractionCard(0, ['Notices your card'], 'OWO', 'Interactions', false),
    new InteractionCard(),
    new InteractionCard(),
    new InteractionCard(),
]

let enhancedCardPlaceholders = //Array(MAX_LENGTH).fill();

    //Array(4).fill(new EnhancedCard()); //Does not work, doesn't create new cards, they all references the same object
[
    new EnhancedCard(0, ['some content stuff'], 'OWO', 'enhancing', false),
    new EnhancedCard(),
    new EnhancedCard(),
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

class Board extends Component {

    constructor(props) {
        //You have to do this in react
        super(props)

        // for(var i = 0; i < enhancedCardPlaceholders; i++){
        //     var card = Object.create(enhancedCardPlaceholders[i]);
        //     card.key = i;
        //     this.state.enhancedCards[i] = card;
        // }

        // for (var i = 0; i < enhancedCardPlaceholders; i++) {
        //     enhancedCardPlaceholders.push(new EnhancedCard());
        // }

        //ALL OF THIS IS USELESS, BUT I'M GONNA KEEP IT AS IT TOOK A LOT OF WORK

        //Assigning keys's
        //You can probably assign all of the card types if you use a forloop and put the different cardtypes in an array
        this.state.activityCards = activityCardPlaceholders.map( (card, index) => {
            if (card !== undefined){
                card.key = index; //Remove if you want to take the id's from api
                return (card);
            } else {
                return new ActivityCard(index);
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

        this.state.enhancedCards = enhancedCardPlaceholders.map( (card, index) => {
            if (card !== undefined){
                card.key = index;
                return (card);
            } else {
                return new EnhancedCard(index);
            }
        });

    }

    deleteCard = (key, type) => {

        let cards = this.state[type];
        console.log(cards)
        console.log(type);

        let index = findIndex(cards, key);
        console.log(index);

        cards[index].reset();

        console.log(cards);

        this.setState({[type]: cards}); // Set state to equal new card array
    }

    moveLeft = (key, type) => {

        // Copy list of cards
        let cards = this.state[type];
        console.log(type);

        // Find index of card
        let index = findIndex(cards, key);
        console.log(index);

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
        console.log(type);

        // Find index of card
        let index = findIndex(cards, key);
        console.log(index);

        let card = cards.filter( card => card.key === key)[0];  // Copy card
        cards = cards.filter( card => card.key !== key);        // Delete card from list

        // Add card to list
        cards.splice(index+1, 0, card);

        // Set state to equal new card array
        this.setState({[type]: cards});
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

        this.setState({[type]: cards});
    }

    state = {
        diaglogOpen: false,
        enhancedCards: [],
        interactionCards: [],
        activityCards: []
    }

    render() {
        return (
            <div>
                <div className='Board'>

                    <div className='BoardLeftSide' >
                        <button onClick={(e) => this.setState({ diaglogOpen: !this.state.diaglogOpen})}>Show Dialog</button>
                        <p>Things on the left side with some more text en random stuff and I don't know if i'm making typing mistakes but it doesn't matter</p>
                    </div>

                    <div className='CardRows'>
                        <div className='EnhancedCardRow'>
                            <CardRow cardRowType='enhanced' 
                            cards={this.state.enhancedCards} 
                            moveLeft={this.moveLeft} 
                            moveRight={this.moveRight} 
                            delCard={this.deleteCard} 
                            addCard={this.addCard}>
                            </CardRow>
                        </div>
                        <div className='InteractionCardRow'>
                            <CardRow cardRowType='interaction' 
                            cards={this.state.interactionCards} 
                            moveLeft={this.moveLeft} 
                            moveRight={this.moveRight} 
                            delCard={this.deleteCard} 
                            addCard={this.addCard}>
                            </CardRow>
                        </div>
                        <div className='ActivityCardRow'>
                            <CardRow cardRowType='activity' 
                            cards={this.state.activityCards} 
                            moveLeft={this.moveLeft} 
                            moveRight={this.moveRight} 
                            delCard={this.deleteCard} 
                            addCard={this.addCard}>
                            </CardRow>
                        </div>
                    </div>

                    {/* This needs to be last */}
                    <Dialog isOpen={this.state.diaglogOpen} onClose={(e) => this.setState({ diaglogOpen: false})}>This is a nice dialog box with a lot of dialog that nicely explains what you should do</Dialog>
                </div>
            </div>
        )
    }
}

export default Board;