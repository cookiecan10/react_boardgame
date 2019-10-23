import React, { Component } from 'react'
import QuestionCard from '../cards/selectCards/Question_Card'
import LETCard from '../cards/selectCards/LET_Card'
import InteractionCard from '../cards/selectCards/Interaction_Card'

export default class CardSelect extends Component {
    render() {
        const cardRowType = this.props.cardRowType;

        let rCard;

        rCard = this.props.cards.map(card => {
            //console.log(card.cardType)
            console.log(cardRowType)

            if (card.isEmpty){
                return (<div />)
            } else {
                //Decide which type of card to render
                switch(card.cardType){
                    case 'QuestionCards':
                        return (<QuestionCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'LETCards':
                        return (<LETCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'interactionCards':
                        return (<InteractionCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                }
            }
        });

        if (!this.props.isOpen) {
            return null;
        }

        return (<div style={cardSelectorStyle} className='CardRow'>
                    <div style={titleStyle}>
                        Select a Card
                    </div>
                    {rCard} 
                </div>)
    }
}

const titleStyle = {
    color: 'white'
}

const cardSelectorStyle = {
    boxSizing: 'border-box',
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    opacity: '0.9',
    top: '0',
    left: '0', 
    bottom: '0', 
    right: '0',
    margin: 'auto',
    padding: '10px',
    width: '800px',
    height: '600px',
    borderRadius: '10px',
    //display: 'flex',    // Note to self, google what 'flex' actually does
    flexDirection: 'column',
    overflow: 'auto',
    float: 'left',
}