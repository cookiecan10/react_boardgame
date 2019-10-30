import React, { Component } from 'react'
import QuestionCard from '../cards/boardCards/Question_Card'
import LETCard from '../cards/boardCards/LET_Card'
import InteractionCard from '../cards/boardCards/Interaction_Card'
import EmptyCard from '../cards/boardCards/EmptyCard'

export default class CardRow extends Component {
    render() {
        const cardRowType = this.props.cardRowType;

        let rCard;

        rCard = this.props.cards.map(card => {

            if (card.isEmpty){
                return (<EmptyCard key={card.key} card={card} cardRowType={cardRowType} addCard={this.props.addCard}/>)
            } else {
                //Decide which type of card to render
                switch(card.cardType){
                    case 'QuestionCards':
                        return (<QuestionCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'LETCards':
                        return (<LETCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'InteractionCards':
                        return (<InteractionCard key={card.key} changeIDescription={this.props.changeIDescription} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                }
            }
        });
        return (<div style={cardRowStyle} className='CardRow'> {rCard} </div>)
    }
}

const cardRowStyle = {
    position: "relative",
    float: "left",
    width: "100%",
    height: "90%",
    border: "3px solid rgba(49, 49, 49, 0.856)",
    overflow: "hidden",
    textAlign: 'center',
}