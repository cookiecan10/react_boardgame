import React, { Component } from 'react'
import CardRow from './CardRow'
import Dialog from './Dialog'

class ActivityCard {
    constructor(key=0, content=[], code='', description='', isEmpty=true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
    }
}
  
class InteractionCard {
constructor(key=0, content=[], code='', description='', isEmpty=true) {
    this.key = key;
    this.content = content;
    this.code = code;
    this.description = description;
    this.isEmpty=isEmpty;
    }
}

class EnhancedCard {
constructor(key=0, content=[], code='', description='', isEmpty=true) {
    this.key = key;
    this.content = content;
    this.code = code;
    this.description = description;
    this.isEmpty=isEmpty;
    }
}

let activityCardPlaceholders = [
    // Constructed with Class
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

let enhancedCardPlaceholders = //Array(4).fill(new EnhancedCard()); //Weird bug with key's not working correctly
[
    new EnhancedCard(0, ['some content stuff'], 'OWO', 'enhancing', false),
    new EnhancedCard(),
    new EnhancedCard(),
    new EnhancedCard(),
]

class Board extends Component {

    constructor(props) {
        //You have to do this in react
        super(props)

        //Assigning id's
        this.state.activityCards = activityCardPlaceholders.map( (card, index) => {
            card.key = index;
            return (card);
        });

        this.state.interactionCards = interactionCardPlaceholders.map( (card, index) => {
            card.key = index;
            return (card);
        });

        this.state.enhancedCards = enhancedCardPlaceholders.map( (card, index) => {
            card.key = index;
            return (card);
        });

    }

    state = {
        diaglogOpen: false
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
                            <CardRow cardType='enhanced' cards={this.state.enhancedCards}></CardRow>
                        </div>
                        <div className='InteractionCardRow'>
                            <CardRow cardType='interaction' cards={this.state.interactionCards}></CardRow>
                        </div>
                        <div className='ActivityCardRow'>
                            <CardRow cardType='activity' cards={this.state.activityCards}></CardRow>
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