import React, { Component } from 'react'
import QuestionCard from '../cards/smallCards/Question_Card'
import LETCard from '../cards/smallCards/LET_Card'
import InteractionCard from '../cards/smallCards/Interaction_Card'
import EmptyCard from '../cards/EmptyCard'

export default class CardRow extends Component {
    render() {
        const cardRowType = this.props.cardRowType;

        let rCard;

        rCard = this.props.cards.map(card => {
            //console.log(card.cardType)
            console.log(cardRowType)

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
                        return (<InteractionCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                }
            }
        });
        return (<div className='CardRow'> {rCard} </div>)
    }
}
